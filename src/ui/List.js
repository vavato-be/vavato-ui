import styled from 'styled-components'
import { rgba } from 'polished'

const List = styled.ul`
  padding-left: 0px;

  > li {
    display: flex;
    border-top: 0.5px solid ${(props) => rgba(props.theme.secondary, 0.3)};
    font-size: 11px;
    box-sizing: border-box;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

export default List
