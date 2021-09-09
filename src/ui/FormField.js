import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 16px 32px 16px 32px;

  &.inline {
    margin: 0;
  }
`

const InputsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & input,
  & select,
  & textarea {
    flex: 1;
    display: block;
    width: 100%;
    border: 2px solid ${(props) => rgba(props.theme.text, 0.4)};
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 3px;

    &::placeholder {
      color: ${(props) => rgba(props.theme.text, 0.4)};
    }

    &:focus,
    &:active {
      outline: none;
      flex: 1;
      width: auto;
      border: 2px solid ${(props) => rgba(props.theme.text, 0.7)};
    }
  }

  & > :not(:first-child) {
    margin-left: 16px;
  }
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.tableHeaders};
  margin-bottom: 4px;
`

function FormField({ name, label, children, inline }) {
  return (
    <Container className={inline ? 'inline' : ''}>
      <Label htmlFor={name}>{label}</Label>
      <InputsContainer>{children}</InputsContainer>
    </Container>
  )
}

export default FormField
