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

  const onDrop = async (acceptedFiles) => {
    setImageLoading(true);
    checkoutStore.setIsLoading(true);

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
      onDropRejected={onReject}
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