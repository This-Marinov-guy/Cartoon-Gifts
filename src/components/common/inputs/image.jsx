import React, { useState, useEffect, useCallback } from 'react';
import { resizeFile, fileToDataUrl, dataUrlToFile } from '@utils/helpers';
import Dropzone from 'react-dropzone';
import useTranslation from 'next-translate/useTranslation';
import { useStore } from 'src/stores/storeContext';
import { Spinner, useToast } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

/**
 * ImageInput
 *
 * Props:
 *   files    – File[] (runtime state kept in order-form)
 *   setFiles – (File[]) => void
 *   onRemove – (index: number) => void  (called so parent can update price)
 *   onReject – rejection handler
 *   type     – 'people' | 'pet'
 */
const ImageInput = ({ files, setFiles, onRemove, onReject, type = 'people' }) => {
  const { checkoutStore } = useStore();
  const { t } = useTranslation('components');
  const toast = useToast();

  // imageStates[i] = { status: 'uploading'|'done'|'error', driveUrl: string|null }
  const [imageStates, setImageStates] = useState([]);

  const dataUrls = type === 'people'
    ? checkoutStore.peopleImageDataUrls
    : checkoutStore.petImageDataUrls;

  // ─── Restore from localStorage on mount ─────────────────────────────────
  useEffect(() => {
    const uploadedUrls = type === 'people'
      ? checkoutStore.uploadedPeopleImageUrls
      : checkoutStore.uploadedPetImageUrls;

    if (dataUrls.length > 0 && files.length === 0) {
      const restored = dataUrls.map((url, i) => dataUrlToFile(url, `${i + 1}.jpg`));
      setFiles(restored);

      if (uploadedUrls.length >= dataUrls.length) {
        setImageStates(dataUrls.map((_, i) => ({ status: 'done', driveUrl: uploadedUrls[i] || null })));
      } else {
        if (type === 'people') checkoutStore.clearPeopleUploadedUrls();
        else checkoutStore.clearPetUploadedUrls();
        setImageStates(dataUrls.map(() => ({ status: 'uploading', driveUrl: null })));
        triggerUpload(restored, 0);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Remove a single image ───────────────────────────────────────────────
  const handleRemove = useCallback((e, index) => {
    e.stopPropagation(); // don't open file picker

    const state = imageStates[index];

    // Drain the pending counter if this upload was in-flight
    if (state?.status === 'uploading') {
      checkoutStore.failUpload();
    }
    // Remove the Drive URL from the store if already uploaded
    if (state?.status === 'done' && state.driveUrl) {
      checkoutStore.removeUploadedUrl(state.driveUrl, type);
    }

    // Remove data URL from store
    if (type === 'people') checkoutStore.removePeopleImageDataUrl(index);
    else checkoutStore.removePetImageDataUrl(index);

    // Remove from local arrays
    setImageStates((prev) => prev.filter((_, i) => i !== index));
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    // Notify parent so it can recalculate price
    if (onRemove) onRemove(index);
  }, [imageStates, files, setFiles, onRemove, type, checkoutStore]);

  // ─── Core upload logic ───────────────────────────────────────────────────
  const triggerUpload = useCallback(async (filesToUpload, startIndex) => {
    checkoutStore.setIsLoading(true);

    setImageStates((prev) => {
      const next = [...prev];
      for (let i = startIndex; i < startIndex + filesToUpload.length; i++) {
        next[i] = { status: 'uploading', driveUrl: null };
      }
      return next;
    });

    try {
      const folderId = await checkoutStore.ensureFolder();
      checkoutStore.incrementPendingUploads(filesToUpload.length);

      await Promise.all(
        filesToUpload.map(async (file, i) => {
          const slotIndex = startIndex + i;
          const driveIndex = checkoutStore.getNextFileIndex();

          const formData = new FormData();
          formData.append('image', file);
          formData.append('folderId', folderId);
          formData.append('index', String(driveIndex));

          try {
            const res = await fetch('/api/common/upload-single-image', {
              method: 'POST',
              body: formData,
            });
            const data = await res.json();
            if (!data.status) throw new Error(data.message || 'Upload failed');

            checkoutStore.addUploadedUrl(data.url, type);
            setImageStates((prev) => {
              const next = [...prev];
              next[slotIndex] = { status: 'done', driveUrl: data.url };
              return next;
            });
          } catch {
            checkoutStore.failUpload();
            setImageStates((prev) => {
              const next = [...prev];
              next[slotIndex] = { status: 'error', driveUrl: null };
              return next;
            });
            toast({
              title: t('common.inputs.imageInput.upload_error'),
              description: t('common.inputs.imageInput.upload_error_desc'),
              status: 'error',
              duration: 10000,
              isClosable: true,
            });
          }
        })
      );
    } catch {
      toast({
        title: t('common.inputs.imageInput.upload_error'),
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    } finally {
      checkoutStore.setIsLoading(false);
    }
  }, [checkoutStore, type, t, toast]);

  // ─── Dropzone handler ────────────────────────────────────────────────────
  const onDrop = useCallback(async (acceptedFiles) => {
    if (!acceptedFiles.length) return;

    const oversized = acceptedFiles.filter((f) => f.size > MAX_FILE_SIZE);
    if (oversized.length) {
      toast({
        title: t('common.inputs.imageInput.file_too_large'),
        description: t('common.inputs.imageInput.max_size_exceeded'),
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    checkoutStore.setIsLoading(true);

    try {
      const resized = await Promise.all(acceptedFiles.map((f) => resizeFile(f)));
      const newDataUrls = await Promise.all(resized.map(fileToDataUrl));

      const startIndex = files.length;
      setFiles([...files, ...resized]);

      if (type === 'people') {
        checkoutStore.setPeopleImageDataUrls([...checkoutStore.peopleImageDataUrls, ...newDataUrls]);
      } else {
        checkoutStore.setPetImageDataUrls([...checkoutStore.petImageDataUrls, ...newDataUrls]);
      }

      checkoutStore.initOrderNumber();
      await triggerUpload(resized, startIndex);
    } catch {
      toast({
        title: t('common.inputs.imageInput.file_error', { fileName: '' }),
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    } finally {
      checkoutStore.setIsLoading(false);
    }
  }, [files, setFiles, type, checkoutStore, t, toast, triggerUpload]);

  // ─── Render ───────────────────────────────────────────────────────────────
  const hasFiles = files.length > 0;

  return (
    <Dropzone
      onDrop={onDrop}
      accept={{
        'image/jpeg': [],
        'image/png': [],
        'image/webp': [],
        'image/jpg': [],
        'image/svg+xml': ['.svg'],
        'image/bmp': [],
        'image/heic': ['.heif', '.heic'],
      }}
      maxFiles={5}
      maxSize={MAX_FILE_SIZE}
      onDropRejected={(rejections) => {
        rejections.forEach((r) => {
          r.errors.forEach((err) => {
            if (err.code === 'file-too-large') {
              toast({
                title: t('common.inputs.imageInput.file_too_large'),
                description: `${r.file.name}: ${t('common.inputs.imageInput.max_size_exceeded')}`,
                status: 'error',
                duration: 10000,
                isClosable: true,
              });
            } else if (err.code === 'too-many-files') {
              toast({
                title: t('common.inputs.imageInput.too_many_files'),
                description: t('common.inputs.imageInput.max_files_exceeded'),
                status: 'error',
                duration: 10000,
                isClosable: true,
              });
            }
          });
        });
        if (onReject) onReject(rejections);
      }}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={`image_input${isDragActive ? ' image_input--active' : ''}`}>
          <input {...getInputProps()} />

          {hasFiles ? (
            <>
              <div className='img-preview-grid'>
                {files.map((_, index) => {
                  const preview = dataUrls[index];
                  const state = imageStates[index] || { status: 'uploading', driveUrl: null };
                  return (
                    <div key={index} className='img-preview-card'>
                      {preview && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={preview} alt={`preview ${index + 1}`} className='img-preview-thumb' />
                      )}

                      {/* Status overlay */}
                      <div className={`img-preview-overlay img-preview-overlay--${state.status}`}>
                        {state.status === 'uploading' && <Spinner size='sm' color='white' />}
                        {state.status === 'done' && <i className='fa-solid fa-check' />}
                        {state.status === 'error' && <i className='fa-solid fa-triangle-exclamation' />}
                      </div>

                      {/* Remove button */}
                      <button
                        type='button'
                        className='img-preview-remove'
                        onClick={(e) => handleRemove(e, index)}
                        title='Remove'
                      >
                        <i className='fa-solid fa-xmark' />
                      </button>
                    </div>
                  );
                })}
              </div>

              <p className='img-drop-more'>
                <i className='fa-light fa-plus' style={{ marginRight: 4 }} />
                {t('common.inputs.imageInput.drag_or_click')}
              </p>
            </>
          ) : isDragActive ? (
            <p>{t('common.inputs.imageInput.drop_files_here')}</p>
          ) : (
            <>
              <i className='fa-light fa-cloud-arrow-up' style={{ color: 'purple', fontSize: 30 }} />
              <p>{t('common.inputs.imageInput.drag_or_click')}</p>
              <small>{t('common.inputs.imageInput.max_images_and_size')}</small>
            </>
          )}
        </div>
      )}
    </Dropzone>
  );
};

export default observer(ImageInput);
