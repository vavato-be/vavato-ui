import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { Modal, ModalHeader, ModalBody } from './Modal'

const Description = styled.p`
  padding: 0px 20px;
`

const ConfirmationModal = ({
  modalOpen,
  setModalOpen,
  title,
  description,
  confirm
}) => {
  return (
    <Modal modalOpen={modalOpen} closeModal={() => setModalOpen(false)}>
      <ModalHeader>
        <h1>{title}</h1>
      </ModalHeader>
      <ModalBody>
        {description ? <Description>{description}</Description> : ''}
        <div>
          <Button onClick={() => setModalOpen(false)} className='outline'>
            Cancel
          </Button>
          <Button
            onClick={() => {
              confirm()
              setModalOpen(false)
            }}
          >
            Confirm
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ConfirmationModal
