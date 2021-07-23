import React from 'react'
import styled from 'styled-components'

import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`

const ListItem = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  & div.icons {
    position: relative;
  }
`

const DownloadFileWrapper = styled('div')`
  cursor: pointer;
`

const TopRightCornerButtonWrapper = styled('div')`
  cursor: pointer;
  position: absolute;
  top: -15px;
  left: 40px;
  font-size: 24px;
  color: dimgrey;

  :hover {
    color: lightgrey;
  }
`

function FileList({ props }) {
  const { files, downloadDocumentHandler, purgeDocumentHandler } = props

  function renderFiles() {
    return files.map((file) => renderFile(file))
  }

  function renderFileName(fileName) {
    if (fileName && fileName.length > 20) {
      return (
        fileName.substring(0, 17) +
        '...' +
        fileName.substring(fileName.lastIndexOf('.') - 3)
      )
    } else {
      return fileName
    }
  }

  function renderFile(file) {
    if (!file) {
      return []
    }
    return (
      <ListItem key={`FileList-${file.id}`}>
        <div className='icons'>
          <DownloadFileWrapper onClick={() => downloadDocumentHandler(file.id)}>
            <FontAwesomeIcon icon={faFilePdf} size='4x' />
          </DownloadFileWrapper>
          <TopRightCornerButtonWrapper
            onClick={() => purgeDocumentHandler(file.id)}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </TopRightCornerButtonWrapper>
        </div>
        <DownloadFileWrapper onClick={() => downloadDocumentHandler(file.id)}>
          {renderFileName(file.name)}
        </DownloadFileWrapper>
        <DownloadFileWrapper onClick={() => downloadDocumentHandler(file.id)}>
          {file.created_at}
        </DownloadFileWrapper>
      </ListItem>
    )
  }

  return <ListWrapper>{renderFiles()}</ListWrapper>
}

export default FileList
