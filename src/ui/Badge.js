import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  font-family: sans-serif;
  background: ${props => props.theme.error};
  padding: 4px;
  max-width: 40px;
  color: ${props => props.theme.lightText};
  text-align: center;
  margin: 4px 8px -5px 0px;
  border-radius: 20px;
  font-size: 11px;
  line-height: 15px;
  font-weight: 700;
  text-transform: uppercase;
  width: 15px;
  max-width: 15px;
  overflow: hidden;
  box-sizing: content-box;

  &.primary {
    color: ${props => props.theme.lightText};
    background: ${props => props.theme.primary};
  }

  &.secondary {
    color: ${props => props.theme.lightText};
    background: ${props => props.theme.secondary};
  }

  &.success {
    background: ${props => props.theme.success};
  }

  &.error {
    background: ${props => props.theme.error};
  }

  &.info {
    background: ${props => props.theme.info};
  }
`;

export default Badge;

