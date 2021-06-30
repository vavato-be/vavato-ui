import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { safeProps } from './utils'

const iconAnimation = keyframes`
  from {
    margin-right: 278px;
  }

  to {
    margin-right: calc(100% - 28px);
  }
`
const iconCloseAnimation = keyframes`
  from {
    margin-right: calc(100% - 28px);
  }

  to {
    margin-right: 278px;
  }
`

const inputAnimation = keyframes`
  from {
    flex: none;
  }

  to {
    flex: 1;
  }
`
const inputCloseAnimation = keyframes`
  from {
    flex: 1;
  }

  to {
    flex: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 37px;
  font-size: 14px;
  color: ${(props) => rgba(props.theme.text, 0.4)};

  & > svg {
    height: 37px;
    margin-left: 12px;
    position: absolute;
    margin-right: 278px;
    animation: ${iconCloseAnimation} 0.5s ease-out;
  }

  &.focused > svg {
    animation: ${iconAnimation} 0.5s ease-out;
    margin-right: calc(100% - 28px);
  }
`
const Input = styled.input.attrs(() => {
  'text'
})`
  flex: none;
  width: 250px;
  border: 2px solid ${(props) => rgba(props.theme.text, 0.4)};
  padding: 8px 16px 8px 36px;
  font-size: 13px;
  animation: ${inputCloseAnimation} 0.5s ease-out;
  border-radius: 5px;

  &::placeholder {
    color: ${(props) => rgba(props.theme.text, 0.4)};
  }

  &:focus,
  &:active {
    outline: none;
    flex: 1;
    width: auto;
    border: 2px solid ${(props) => rgba(props.theme.text, 0.7)};
    animation: ${inputAnimation} 0.5s ease-out;
  }
`

function SearchField(props) {
  const input = useRef(null)
  const [focused, setFocused] = useState(false)

  function emitChange() {
    if (!props.onChange) {
      return
    }

    props.onChange(input.current.value)
  }

  return (
    <Container focused={focused} className={focused ? 'focused' : ''}>
      <FontAwesomeIcon icon={faSearch} onClick={() => input.current.focus()} />
      <Input
        ref={input}
        {...safeProps(props)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => emitChange()}
      />
    </Container>
  )
}

export default SearchField
