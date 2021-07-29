import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  opacity: 0.3;
  background-color: #000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
`

const Panel = styled.div`
  background-color: #fff;
  box-shadow: -11px 1px 36px -18px rgba(0, 0, 0, 0.64);
  position: fixed;
  width: 33vw;
  height: calc(100vh - 22px);
  top: 0;
  right: 0;
  z-index: ${(props) => props.zIndex};
  overflow-y: auto;

  & *,
  & *:after,
  & *:before {
    box-sizing: content-box;
  }
`

/**
 * Renders the RightPanel
 */
function RightPanel({ open, children, zIndex = 2, onClose = () => {} }) {
  if (!open) {
    return null
  }

  return (
    <React.Fragment>
      <Overlay onClick={onClose} />
      <Panel zIndex={zIndex}>{children}</Panel>
    </React.Fragment>
  )
}

export default RightPanel
