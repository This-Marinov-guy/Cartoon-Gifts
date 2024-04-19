import React, { Fragment, useState } from 'react'
import { cleanFileName } from '@utils/helpers'
import Dropzone from 'react-dropzone'

const ImageInput = ({ files, setFiles, onReject }) => {
  const onDrop = (acceptedFiles) => {
    setFiles([...acceptedFiles]);
  }

  return (
    <Dropzone onDrop={onDrop} accept="image/jpeg, image/png, image/webp image/jpg image/svg+xml image/bmp image/heic image/heif" maxFiles={10} maxSize={5485760} onDropRejected={onReject}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className='image_input'>

            {files.length > 0 ? files.map((file, index) => { return <div className='center_div'><p key={index}>{cleanFileName(file)}</p></div> }) : <Fragment>
              <i className="fa-light fa-cloud-arrow-up" style={{ color: 'purple', fontSize: '30px' }}></i>
              {isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>}
              <small>Maximum of 10 images | Maximum size of 5Mb</small>
            </Fragment>}
          </div>
        </div>)}
    </Dropzone>
  )
}

export default ImageInput