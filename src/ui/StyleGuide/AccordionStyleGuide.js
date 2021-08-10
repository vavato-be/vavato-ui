import React, { useState } from 'react'
import Accordion from '../Accordion'
import Card from '../Card'

function AccordionStyleGuide() {
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <div className='title'>&lt;Accordion&gt;</div>
      <p>An accordion menu is used to open and close a block conditionally.</p>
      <Card>
        <Accordion
          title='Accordion'
          setOpen={() => {
            setOpen((open) => !open)
          }}
          isOpen={open}
        />
        {open ? <p>Test Accordion</p> : null}
      </Card>
    </Card>
  )
}

export default AccordionStyleGuide
