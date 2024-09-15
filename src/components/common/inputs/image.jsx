import React, { Fragment } from 'react'
import { cleanFileName } from '@utils/helpers'
import Dropzone from 'react-dropzone'
import useTranslation from 'next-translate/useTranslation'
import useImageResize from '@hooks/use-resize'

const ImageInput = ({ files, setFiles, onReject }) => {

    const { t } = useTranslation('components');

  const { resizeImage } = useImageResize();

  const onDrop = (acceptedFiles) => {
    const resizedImages = [];

    acceptedFiles.forEach(async (file) => {
      try {
        const resizedFile = await resizeImage(file);
        resizedImages.push(resizedFile);
      } catch (err) {
        resizedImages.push(file);
      }
    });
    
    setFiles(resizedImages);
  }

  return (
    <Dropzone onDrop={onDrop} accept={{ "image/jpeg": [], "image/png": [], "image/webp": [], "image/jpg": [], "image/svg": ['.xml', '.svg'], "image/bmp": [], "image/heic": ['.heif', '.heic'] }} maxFiles={5} maxSize={5485760} onDropRejected={onReject}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className='image_input'>

            {files.length > 0 ? files.map((file, index) => { return <div key={index} className='center_div'><p>{cleanFileName(file)}</p></div> }) : <Fragment>
              <i className="fa-light fa-cloud-arrow-up" style={{ color: 'purple', fontSize: '30px' }}></i>
              {isDragActive ?
                <p>{t('common.inputs.imageInput.drop_files_here')}</p> :
                <p>{t('common.inputs.imageInput.drag_or_click')}</p>}
              <small>{t('common.inputs.imageInput.max_images_and_size')}</small>
            </Fragment>}
          </div>
        </div>)}
    </Dropzone>
  )
}

export default ImageInput