import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Overlay from './Overlay'

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(204, 204, 204);
  background: #fff;
  overflow: auto;
  padding: 20px 40px;
  z-index: 2;
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 5px;
  right: 8px;
  cursor: pointer;
`

export const ModalHeader = styled.div`
  & h1 {
    margin-top: 0px !important;
  }
`

export const ModalBody = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Modal = ({ modalOpen, closeModal, children }) => {
  if (!modalOpen) {
    return null
  }

  return (
    <React.Fragment>
      <Overlay onClick={closeModal} />
      <StyledModal>
        <CloseIcon onClick={closeModal} icon={faTimes} size='2x' />
        {children}
      </StyledModal>
    </React.Fragment>
  )
}
