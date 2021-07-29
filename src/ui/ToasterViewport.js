import React, { useContext, useMemo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  faTimesCircle,
  faInfoCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

import Toaster from './Toaster'
import ToasterContext from './ToasterContext'
import { selectAllToasters } from './../toasterSlice'

const ICONS = {
  success: faCheckCircle,
  error: faTimesCircle,
  info: faInfoCircle
}

const ToastersDisplay = styled('div')`
  position: fixed;
  bottom: 10%;
  right: 10%;
  left: calc(${(props) => props.theme.navbarWidth}px + 10%);
  z-index: 999;
`

function ToasterViewport() {
  const { toasters, dismiss } = useContext(ToasterContext)
  const reduxToasters = useSelector(selectAllToasters)

  const allToasters = useMemo(() => {
    console.log('Calculating allToasters')
    return [...reduxToasters, ...toasters]
  }, [toasters, reduxToasters])

  function renderToaster({ type, key, message }) {
    return (
      <Toaster
        type={type}
        icon={ICONS[type]}
        key={key}
        uid={key}
        onDismiss={() => dismiss(key)}
      >
        {message}
      </Toaster>
    )
  }
  return (
    <ToastersDisplay>
      {allToasters.map((entry) => renderToaster(entry))}
    </ToastersDisplay>
  )
}

export default ToasterViewport
