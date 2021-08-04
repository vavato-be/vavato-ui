import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { safeProps } from './utils'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 37px;
  font-size: 14px;
  color: ${(props) => rgba(props.theme.text, 0.4)};

  & > svg {
    height: 37px;
    margin-right: calc(100% - 28px);
    position: absolute;
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
