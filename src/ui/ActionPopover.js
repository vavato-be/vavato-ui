import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Menu = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  background: white;
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 8px 32px;
  z-index: 5;
  flex-direction: row;
  flex-spacing: space-between;
  align-items: center;
  font-size: 18px;

  & > div {
    flex: 1;
  }
`

const Close = styled.span`
  cursor: pointer;
  font-size: 24px;
  margin-right: 32px;
`

function ActionPopover({ children, open, cancel }) {
  return (
    <Menu open={open}>
      <Close onClick={() => (cancel ? cancel() : null)}>
        <FontAwesomeIcon icon={faTimes} />
      </Close>
      {children}
    </Menu>
  )
}

export default ActionPopover
