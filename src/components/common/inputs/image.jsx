import React, { useState } from 'react';
import { cleanFileName, createFileName, resizeFile } from '@utils/helpers';
import Dropzone from 'react-dropzone';
import useTranslation from 'next-translate/useTranslation';
import { useStore } from 'src/stores/storeContext';
import { Spinner, useToast } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

const ImageInput = ({ files, setFiles, onReject }) => {
  const { checkoutStore } = useStore();
  const { t } = useTranslation('components');
  const [imageLoading, setImageLoading] = useState(false);

  const toast = useToast();
  
  // Maximum file size: 5MB (before resize)
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  const onDrop = async (acceptedFiles) => {
    setImageLoading(true);
    checkoutStore.setIsLoading(true);

    // Validate file sizes before processing
    const oversizedFiles = acceptedFiles.filter(file => file.size > MAX_FILE_SIZE);
    
    if (oversizedFiles.length > 0) {
      toast({
        title: t("common.inputs.imageInput.file_too_large") || "File too large",
        description: t("common.inputs.imageInput.max_size_exceeded") || `Maximum file size is 5MB. Please compress your images.`,
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      setImageLoading(false);
      checkoutStore.setIsLoading(false);
      return;
    }

    try {
      const resizedImages = await Promise.all(
        acceptedFiles.map(async (file) => {
          try {
            return await resizeFile(file);
          } catch (err) {
            toast({
              title: t("common.inputs.imageInput.file_error", {fileName: file.fileName}),
              status: "error",
              duration: 10000,
              isClosable: true,
            });
          }
        })
      );

      setFiles(resizedImages);
    } catch (error) {
      console.error('Error processing files:', error);
    } finally {
      setImageLoading(false);
      checkoutStore.setIsLoading(false);
    }
  };

  return (
    <Dropzone
      onDrop={onDrop}
      accept={{
        "image/jpeg": [],
        "image/png": [],
        "image/webp": [],
        "image/jpg": [],
        "image/svg+xml": ['.svg'],
        "image/bmp": [],
        "image/heic": ['.heif', '.heic']
      }}
      maxFiles={5}
      maxSize={MAX_FILE_SIZE}
      onDropRejected={(fileRejections) => {
        fileRejections.forEach((file) => {
          file.errors.forEach((err) => {
            if (err.code === 'file-too-large') {
              toast({
                title: t("common.inputs.imageInput.file_too_large") || "File too large",
                description: t("common.inputs.imageInput.max_size_exceeded") || `${file.file.name} is too large. Maximum size is 5MB.`,
                status: "error",
                duration: 10000,
                isClosable: true,
              });
            } else if (err.code === 'too-many-files') {
              toast({
                title: t("common.inputs.imageInput.too_many_files") || "Too many files",
                description: t("common.inputs.imageInput.max_files_exceeded") || "Maximum 5 files allowed.",
                status: "error",
                duration: 10000,
                isClosable: true,
              });
            } else {
              toast({
                title: t("common.inputs.imageInput.file_error", {fileName: file.file.name}),
                status: "error",
                duration: 10000,
                isClosable: true,
              });
            }
          });
        });
        if (onReject) onReject(fileRejections);
      }}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className='image_input'>
            {imageLoading ? (
              <Spinner />
            ) : files.length > 0 ? (
              files.map((file, index) => (
                <div key={index} className='center_div'>
                  <p>{createFileName(index + 1)}</p>
                </div>
              ))
            ) : (              
              <>
                <i className="fa-light fa-cloud-arrow-up" style={{ color: 'purple', fontSize: '30px' }}></i>
                {isDragActive ? (
                  <p>{t('common.inputs.imageInput.drop_files_here')}</p>
                ) : (
                  <p>{t('common.inputs.imageInput.drag_or_click')}</p>
                )}
                <small>{t('common.inputs.imageInput.max_images_and_size')}</small>
              </>
            )}
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default observer(ImageInput);