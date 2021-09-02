import styled from 'styled-components'
import { rgba } from 'polished'

const Table = styled.table`
  width: 100%;
  margin: 16px 0;
  border-spacing: 0;
  border-collapse: collapse;
  border: none;

  & thead td,
  & thead th {
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: ${(props) => props.theme.tableHeaders};
    padding: 0 8px;
    border: none;
    background: #fff;
  }

  & tbody tr:nth-child(odd) {
    background: ${(props) => props.theme.background} !important;
  }

  & tr {
    height: 54px;
    border: none;
  }

  & td,
  & th {
    border: none !important;
  }

  & tbody tr.active {
    background: ${(props) => rgba(props.theme.secondary, 0.1)} !important;
  }

  & tbody td,
  & tfoot td {
    font-size: 12px;
    text-align: left;
    padding: 0 8px;
  }

  & td:last-child() {
    padding-right: 0;
  }

  & td.number,
  & th.number {
    text-align: right;
  }

  & td a {
    color: #000 !important;
    font-weight: 700;
    text-decoration: underline;
  }

  & td.total {
    font-weight: 700;
    text-align: right;
  }
`

export default Table
