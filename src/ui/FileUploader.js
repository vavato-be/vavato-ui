import React, { useRef } from 'react'
import { DirectUploadProvider } from 'react-activestorage-provider'

import ButtonWithIcon from './ButtonWithIcon'
import useEnv from './EnvContext'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'

import { requestHeaders } from '../Fetch'

function FileUploader({ props }) {
  const { attachDocumentHandler, modelId, multiple, path } = props
  const fileInputField = useRef(null)

  // Handle post-upload actions
  function handleSuccess(signedIds) {
    attachDocumentHandler(modelId, signedIds)
  }

  const handleUploadBtnClick = () => {
    fileInputField.current.click()
  }

  const handleDragover = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <DirectUploadProvider
      directUploadsPath={`${useEnv('DOMAIN')}${path}`}
      headers={requestHeaders()}
      multiple={multiple}
      onSuccess={handleSuccess}
      render={({ handleUpload, uploads, ready }) => (
        <div>
          <ButtonWithIcon
            id='dragbox'
            type='button'
            icon={faArrowAltCircleUp}
            onClick={handleUploadBtnClick}
            onDragOver={handleDragover}
            onDrop={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleUpload(e.dataTransfer.files)
            }}
          >
            <i className='fas fa-file-upload' />
            <span> Upload files </span>
          </ButtonWithIcon>
          <input
            type='file'
            multiple={multiple}
            ref={fileInputField}
            // Effectively hide the element
            style={{
              display: 'none',
              position: 'absolute'
            }}
            disabled={!ready}
            onChange={(e) => handleUpload(e.currentTarget.files)}
            title=''
            value=''
          />

          {uploads.map((upload) => {
            switch (upload.state) {
              default:
                return (
                  <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                )
              case 'uploading':
                return (
                  <p key={upload.id}>
                    Uploading {upload.file.name}: {upload.progress}%
                  </p>
                )
              case 'error':
                return (
                  <p key={upload.id}>
                    Error uploading {upload.file.name}: {upload.error}
                  </p>
                )
              case 'finished':
                return (
                  <p key={upload.id}>Finished uploading {upload.file.name}</p>
                )
            }
          })}
        </div>
      )}
    />
  )
}

export default FileUploader
