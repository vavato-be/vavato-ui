import styled from 'styled-components'
import { rgba } from 'polished'

const Breadcrumbs = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.text};

  & a,
  & a:active,
  & a:visited,
  & a:hover,
  span.active {
    color: ${(props) => props.theme.text};
  }

  & a:after {
    content: '>';
    padding: 0 4px;
    color: ${(props) => rgba(props.theme.text, 0.5)};
  }

  & a:hover {
    text-decoration: underline;
  }
`
export default Breadcrumbs
