import React from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Card from '../Card'
import Button from '../Button'
import ButtonWithIcon from '../ButtonWithIcon'

function ButtonStyleGuide() {
  return (
    <Card>
      <div className='title'>&lt;Button&gt;</div>
      <p>
        Just a regular HTML <span className='pre'>button</span> with styling
        applied.
      </p>
      <Card>
        <div className='title'>Primary Color</div>
        <Button primary onClick={() => alert('Clicked')}>
          Click me
        </Button>
        <Button primary disabled>
          Can't click me
        </Button>
        <Button primary className='outline'>
          Outline
        </Button>
        <Button primary disabled className='outline'>
          Outline
        </Button>
        <ButtonWithIcon primary icon={faCoffee}>
          Take a break
        </ButtonWithIcon>
        <ButtonWithIcon primary disabled icon={faCoffee}>
          Take a break
        </ButtonWithIcon>
        <ButtonWithIcon primary icon={faCoffee} />
        <ButtonWithIcon primary disabled icon={faCoffee} />
      </Card>
      <Card>
        <div className='title'>Secondary Color</div>
        <Button onClick={() => alert('Clicked')}>Click me</Button>
        <Button disabled>Can't click me</Button>
        <Button className='outline'>Outline</Button>
        <Button disabled className='outline'>
          Outline
        </Button>
        <ButtonWithIcon icon={faCoffee}>Take a break</ButtonWithIcon>
        <ButtonWithIcon disabled icon={faCoffee}>
          Take a break
        </ButtonWithIcon>
        <ButtonWithIcon icon={faCoffee} />
        <ButtonWithIcon disabled icon={faCoffee} />
      </Card>
    </Card>
  )
}

export default ButtonStyleGuide
