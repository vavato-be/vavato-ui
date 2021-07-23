import styled from 'styled-components'
import { rgba } from 'polished'

const Input = styled('input')`
  border: 2px solid ${(props) => rgba(props.theme.text, 0.4)};
  padding: 8px 16px;
  font-size: 13px;
  border-radius: 5px;

  &::placeholder {
    color: ${(props) => rgba(props.theme.text, 0.4)};
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${(props) => rgba(props.theme.text, 0.7)};
  }
`

export default Input
