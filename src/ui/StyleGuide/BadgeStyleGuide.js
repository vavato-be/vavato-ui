import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfo } from '@fortawesome/free-solid-svg-icons'

import Card from '../Card'
import Badge from '../Badge'

function BadgeStyleGuide() {
  return (
    <Card>
      <div className='title'>&lt;Badge&gt;</div>
      <p>
        A round circle representing usually number of pending notifications.
      </p>
      <Card>
        <ul>
          <li>
            <Badge>1</Badge>with no class applied
          </li>
          <li>
            <Badge className='primary'>11</Badge>
            with the "primary" className
          </li>
          <li>
            <Badge className='secondary'>111</Badge>
            with the "secondary" className
          </li>
          <li>
            <Badge className='success'>
              <FontAwesomeIcon icon={faCheck} />
            </Badge>
            with the "success" className
          </li>
          <li>
            <Badge className='error'>
              <FontAwesomeIcon icon={faTimes} />
            </Badge>
            with the "error" className
          </li>
          <li>
            <Badge className='info'>
              <FontAwesomeIcon icon={faInfo} />
            </Badge>
            with the "info" className
          </li>
        </ul>
      </Card>
    </Card>
  )
}

export default BadgeStyleGuide
