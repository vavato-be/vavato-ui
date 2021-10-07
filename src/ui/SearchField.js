import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { safeProps } from './utils'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  font-size: 14px;
  color: ${(props) => rgba(props.theme.text, 0.4)};

  & > svg {
    margin-right: calc(100% - 28px);
    position: absolute;
  }

  &.shrinked > input {
    width: 0;
    padding-right: 3px;
  }
`
const Input = styled.input.attrs(() => {
  'text'
})`
  flex: 1;
  width: 100%;
  border: 2px solid ${(props) => rgba(props.theme.text, 0.4)};
  padding: 8px 16px 8px 36px;
  font-size: 13px;
  border-radius: 3px;

  &::placeholder {
    color: ${(props) => rgba(props.theme.text, 0.4)};
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${(props) => rgba(props.theme.text, 0.7)};
  }
`

function SearchField(props) {
  const input = useRef(null)
  const [focused, setFocused] = useState(false)
  const [shrinked, setShrinked] = useState(props.shrink)

  function emitChange() {
    if (!props.onChange) {
      return
    }

    props.onChange(input.current.value)
  }

  function onFocus() {
    setFocused(true)
    if (props.shrink) setShrinked(false)
  }

  function onBlur(e) {
    setFocused(false)
    if (props.shrink && !e.target.value) setShrinked(true)
  }

  return (
    <Container
      focused={focused}
      className={`${focused ? 'focused' : ''} ${shrinked ? 'shrinked' : ''}`}
    >
      <FontAwesomeIcon icon={faSearch} onClick={() => input.current.focus()} />
      <Input
        ref={input}
        {...safeProps(props)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => emitChange()}
      />
    </Container>
  )
}

export default SearchField
