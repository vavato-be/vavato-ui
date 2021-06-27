import React from 'react'
import Card from '../Card'
import Table from '../Table'
import Label from '../Label'
import EllipsisMenu from '../EllipsisMenu'
import LinkWithIcon from '../LinkWithIcon'
import { faCoffee, faTruck } from '@fortawesome/free-solid-svg-icons'

function TableStyleGuide() {
  function dataRow(i) {
    return (
      <tr key={i} className={i === 3 ? 'active' : null}>
        <td>Data 1</td>
        <td>
          <Label className='primary'>PRIMARY</Label>
        </td>
        <td>Data 2</td>
        <td>
          <a href='/'>Link</a>
        </td>
        <td className='number'>€900,00</td>
        <td>
          <EllipsisMenu>{ellipsisContent()}</EllipsisMenu>
        </td>
      </tr>
    )
  }

  function ellipsisContent() {
    return [
      <LinkWithIcon
        icon={faCoffee}
        key='coffee'
        onClick={() => alert("Here's your coffee")}
      >
        Take a break
      </LinkWithIcon>,
      <LinkWithIcon
        icon={faTruck}
        key='truck'
        onClick={() => alert('A trucker stops by. He looks tired.')}
      >
        Hitch a hike
      </LinkWithIcon>
    ]
  }

  return (
    <Card>
      <div className='title'>&lt;Table&gt;</div>
      <p>
        Just a regular HTML <span className='pre'>table</span> with styling
        applied.
      </p>
      <Card>
        <Table>
          <thead>
            <tr>
              <td>Header 1</td>
              <td>Label</td>
              <td>Header 2</td>
              <td>Link</td>
              <td className='number'>Number</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => dataRow(i))}
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default TableStyleGuide
