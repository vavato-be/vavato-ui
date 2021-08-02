import styled from 'styled-components'
import { rgba, darken, saturate } from 'polished'

const Button = styled.button.attrs((props) => ({ type: 'button' }))`
  background: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: 2px solid transparent;
  color: ${(props) => props.theme.lightText};
  padding: 5px 13px;
  line-height: 32px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  margin: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 5px;

  &.outline {
    background: none;
    color: ${(props) =>
      props.primary ? props.theme.primary : props.theme.secondary};
    border-color: ${(props) =>
      props.primary ? props.theme.primary : props.theme.secondary};
  }

  &:hover {
    color: ${(props) => props.theme.lightText};
    background: ${(props) =>
      darken(
        0.1,
        saturate(
          0.3,
          props.primary ? props.theme.primary : props.theme.secondary
        )
      )};
    transition: 0.5s ease-out;
  }

  &[disabled],
  &[disabled]:hover {
    background: ${(props) =>
      rgba(props.primary ? props.theme.primary : props.theme.secondary, 0.6)};
    cursor: not-allowed;
  }

  &.outline[disabled],
  &.outline[disabled]:hover {
    background: none;
    color: ${(props) =>
      rgba(props.primary ? props.theme.primary : props.theme.secondary, 0.6)};
    border-color: ${(props) =>
      rgba(props.primary ? props.theme.primary : props.theme.secondary, 0.6)};
  }
`

export default Button
