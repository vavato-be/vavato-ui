import React from 'react';
import styled from 'styled-components';

const PropertyListTable = styled.table`
  width: 100%;
  font-size: 12px;
  border: none !important;

  & tr {
    border: none !important;
  }

  & td {
    height: 2rem;
    border: none !important;
  }

  & td.key {
    font-weight: bold;
    text-transform: uppercase;
    width: ${props => props.labelWidth}
  }

  & td.key:after {
    content: ':'
  }

  & td.value {
    color: #000;
  }

  & td a {
    color: #000 !important;
    font-weight: 700;
    text-decoration: underline;
  }
`
function PropertyList({ data, labelWidth = '150px' }) {
  const properties = Object.entries(data);

  function renderProperties() {
    return properties.map(prop => renderProperty(prop))
  }

  function renderProperty([key, value]) {
    if(!value) {
      return []
    }
    return (
      <tr key={key}>
        <td className="key">{key}</td>
        <td className="value">{value}</td>
      </tr>
    )
  }

  return (
    <PropertyListTable labelWidth={labelWidth}>
      <tbody>
        { renderProperties() }
      </tbody>
    </PropertyListTable>
  )

}

export default PropertyList;
