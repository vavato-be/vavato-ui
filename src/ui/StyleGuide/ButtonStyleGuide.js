import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Card from '../Card';
import Button from  '../Button';
import ButtonWithIcon from '../ButtonWithIcon';

function ButtonStyleGuide() {
  return (
    <Card>
      <div className="title">&lt;Button&gt;</div>
      <p>
        Just a regular HTML <span className="pre">button</span> with styling applied.
      </p>
      <Card>
        <Button onClick={() => alert('Clicked')}>Click me</Button>
        <Button className="outline">Outline</Button>
        <ButtonWithIcon icon={faCoffee}>Take a break</ButtonWithIcon>
      </Card>
    </Card>
  );
}

export default ButtonStyleGuide;

