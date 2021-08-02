import styled from 'styled-components'
import { rgba, darken } from 'polished'

const Button = styled.button.attrs((props) => ({ type: 'button' }))`
  background: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: 2px solid
    ${(props) => (props.primary ? props.theme.primary : props.theme.secondary)};
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

  &.outline {
    background: none;
    color: ${(props) =>
      props.primary ? props.theme.primary : props.theme.secondary};
  }

  &:hover {
    background: ${(props) =>
      props.primary ? props.theme.primaryHover : props.theme.secondaryHover};
    border: 2px solid
      ${(props) =>
        darken(
          0.2,
          props.primary ? props.theme.primaryHover : props.theme.secondaryHover
        )};
    transition: 0.5s ease-out;
  }

  &[disabled],
  &[disabled]:hover {
    background: ${(props) =>
      rgba(props.primary ? props.theme.primary : props.theme.secondary, 0.6)};
    border: 2px solid transparent;
    cursor: not-allowed;
  }
`

export default Button
