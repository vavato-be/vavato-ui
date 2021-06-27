import React from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Card from '../Card'
import Tooltip from '../Tooltip'

function ButtonStyleGuide() {
  return (
    <Card>
      <div className='title'>&lt;Tooltip&gt;</div>
      <p>An icon that reveals information in a popup when hovered.</p>
      <Card>
        <ul>
          <li>
            Without an icon specified
            <Tooltip>Hi, I'm a very helpful tooltip.</Tooltip>
          </li>
          <li>
            With an icon specified
            <Tooltip icon={faCoffee}>Here's your cup of joe.</Tooltip>
          </li>
        </ul>
      </Card>
    </Card>
  )
}

export default ButtonStyleGuide
