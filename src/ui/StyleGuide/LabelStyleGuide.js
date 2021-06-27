import React from 'react'
import Card from '../Card'
import Label from '../Label'

function LabelStyleGuide() {
  return (
    <Card>
      <div className='title'>&lt;Label&gt;</div>
      <p>A round label representing usually status or tags.</p>
      <Card>
        <ul>
          <li>
            <Label>default</Label>with no class applied
          </li>
          <li>
            <Label className='primary'>primary</Label>
            with the "primary" className
          </li>
          <li>
            <Label className='secondary'>secondary</Label>
            with the "secondary" className
          </li>
          <li>
            <Label className='success'>success</Label>
            with the "success" className
          </li>
          <li>
            <Label className='error'>error</Label>
            with the "error" className
          </li>
          <li>
            <Label className='info'>info</Label>
            with the "info" className
          </li>
        </ul>
      </Card>
    </Card>
  )
}

export default LabelStyleGuide
