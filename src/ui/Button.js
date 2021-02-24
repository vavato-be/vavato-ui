import styled from 'styled-components';
import { lighten, darken } from 'polished'

const Button = styled.button.attrs(props => ({ type: 'button' }))`
  background: ${props => props.theme.secondary};
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.lightText};
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
    color: ${props => props.theme.secondary};
  }

  &:hover {
    background: ${props => darken(0.2, props.theme.secondary)};
    border: 2px solid ${props => darken(0.2, props.theme.secondary)};
    transition: 0.5s ease-out;
  }

  &[disabled], &[disabled]:hover {
    background: ${props => lighten(0.2, props.theme.secondary)};
    border: 2px solid ${props => lighten(0.2, props.theme.secondary)};
    cursor: not-allowed;
  }
`

export default Button
