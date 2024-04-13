import React, { Fragment, useState } from 'react'
import { cleanFileName } from '@utils/helpers'
import Dropzone from 'react-dropzone'

const ImageInput = () => {
  const [files, setFiles] = useState([])

  const onDrop = (acceptedFiles) => {
    setFiles([...acceptedFiles]);
  }

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className='image_input'>

            {files.length > 0 ? files.map((file, index) => { return <div className='center_div'><p key={index}>{cleanFileName(file)}</p><i className="fa-solid fa-xmark" style={{ color: 'red' }}></i></div> }) : <Fragment>
              <i className="fa-light fa-cloud-arrow-up" style={{ color: 'purple', fontSize: '30px' }}></i>
              {isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>}
              <small>Supported files: jpg, jpeg, png, webp</small>
            </Fragment>}
          </div>
        </div>)}
    </Dropzone>
  )
}

export default ImageInput