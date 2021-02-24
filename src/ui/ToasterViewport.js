import React, { useContext } from 'react';
import styled from 'styled-components';
import { faTimesCircle , faInfoCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'

import Toaster from './Toaster';
import ToasterContext from  './ToasterContext';

const ICONS = {
  success: faCheckCircle,
  error: faTimesCircle,
  info: faInfoCircle
}

const ToastersDisplay = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
  left: calc(${props => props.theme.navbarWidth}px + 10%);
  z-index: 999;
`

function ToasterViewport() {
  const { toasters, dismiss } = useContext(ToasterContext);
  function renderToaster({ type, key, message }) {
    return (
      <Toaster type={type}
        icon={ICONS[type]}
        key={key}
        uid={key}
        onDismiss={() => dismiss(key)}>
        { message }
      </Toaster>
    )
  }
  return (
    <ToastersDisplay>
      { toasters.map(entry => renderToaster(entry)) }
    </ToastersDisplay>
  )
}

export default ToasterViewport;

