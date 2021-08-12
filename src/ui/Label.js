import styled from 'styled-components'
import { rgba } from 'polished'

const Label = styled.span`
  display: inline-block;
  background: ${(props) => rgba(props.theme.text, 0.2)};
  padding: 4px 8px;
  min-width: 70px;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin: 4px 8px 4px 0px;
  border-radius: 18px;
  font-size: 11px;
  line-height: 15px;
  font-weight: 700;
  text-transform: uppercase;
  box-sizing: content-box;

  &.primary {
    background: ${(props) => rgba(props.theme.primary, 0.2)};
    color: ${(props) => props.theme.primary};
  }

  &.secondary {
    background: ${(props) => rgba(props.theme.secondary, 0.2)};
    color: ${(props) => props.theme.secondary};
  }

  &.success {
    background: ${(props) => rgba(props.theme.success, 0.2)};
    color: ${(props) => props.theme.success};
  }

  &.error {
    background: ${(props) => rgba(props.theme.error, 0.2)};
    color: ${(props) => props.theme.error};
  }

  &.info {
    background: ${(props) => rgba(props.theme.info, 0.2)};
    color: ${(props) => props.theme.info};
  }

  &.neutral {
    background: none;
    color: black;
  }

  &.fluid {
    min-width: 0 !important;
    width: auto !important;
  }
`

export default Label
