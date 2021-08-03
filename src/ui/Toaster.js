import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ToasterContext from './ToasterContext'

const Container = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  margin-top: 16px;
  border-radius: 3px;

  & svg {
    margin: 0 32px;
  }

  &.error {
    border-left: 4px solid ${(props) => props.theme.error};
  }

  &.error svg {
    color: ${(props) => props.theme.error};
  }

  &.error .title {
    color: ${(props) => props.theme.error};
  }
  &.success {
    border-left: 4px solid ${(props) => props.theme.success};
  }

  &.success svg {
    color: ${(props) => props.theme.success};
  }

  &.success .title {
    color: ${(props) => props.theme.success};
  }

  &.info {
    border-left: 4px solid ${(props) => props.theme.secondary};
  }

  &.info svg {
    color: ${(props) => props.theme.secondary};
  }

  &.info .title {
    color: ${(props) => props.theme.secondary};
  }
`

const Title = styled.div`
  font-weight: 700;
  text-transform: capitalize;
`

const Content = styled.div`
  flex: 1;
`

const Close = styled.button`
  border: 0;
  background: transparent;
  font-size: 24px;
  color: ${(props) => props.theme.text} !important;
  text-align: right;
  padding: 0;
  margin: 0;
  outline: none;

  & svg {
    color: ${(props) => props.theme.text} !important;
  }
`

function Toaster({ icon, type, children, uid, duration = 2000 }) {
  const { dismiss, toasters } = useContext(ToasterContext)
  const [timer, setTimer] = useState(false)
  const close = useRef(null)

  useEffect(() => {
    if (timer) {
      return
    }

    const timeout = setTimeout(() => {
      close.current.click()
      setTimer(true)
    }, duration)
    return () => clearTimeout(timeout)
  }, [duration, timer])

  return (
    <Container className={type}>
      <FontAwesomeIcon icon={icon} />
      <Content>
        <Title className='title'>{type}</Title>
        {children}
      </Content>
      <Close ref={close} onClick={() => dismiss(uid, toasters)}>
        <FontAwesomeIcon icon={faTimes} />
      </Close>
    </Container>
  )
}

export default Toaster
