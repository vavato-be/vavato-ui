import React, { useState } from 'react'
import Card from '../Card'
import Button from '../Button'
import ButtonWithIcon from '../ButtonWithIcon'
import ActionPopover from '../ActionPopover'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ActionPopoverStyleGuide() {
  const [open, setOpen] = useState(false)
  return (
    <Card>
      <div className='title'>&lt;Button&gt;</div>
      <p>An action bar down the bottom of the screen to carry out actions.</p>
      <Card>
        <Button onClick={() => setOpen(!open)}>TOGGLE BAR</Button>
        <ActionPopover open={open} close={() => setOpen(false)}>
          <div>
            <span className='secondary' /> transactions selected.&nbsp; Select
            payment request to continue.
          </div>
          <ButtonWithIcon icon={faHeart}>MATCH</ButtonWithIcon>
        </ActionPopover>
      </Card>
    </Card>
  )
}

export default ActionPopoverStyleGuide
