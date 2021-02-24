import React, { useState } from 'react';
import Card from '../Card';
import ButtonWithIcon from '../ButtonWithIcon';
import ActionPopover from '../ActionPopover';

import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons'

function ButtonStyleGuide() {
  const [open, setOpen] = useState();

  return (
    <Card>
      <div className="title">&lt;ActionPopover&gt;</div>
      <p>
        An action bar down the bottom of the screen to act on the current context.
      </p>
      <Card>
        <ButtonWithIcon icon={ faPlay } onClick={ () => setOpen(true) }>START MATCHING</ButtonWithIcon>
        <ActionPopover cancel={ () => setOpen(false) } open={ open }>
          <div>
            <span className="secondary">2</span> transactions selected. Select
            payment request to continue.
          </div>
          <ButtonWithIcon icon={faHeart}>MATCH</ButtonWithIcon>
        </ActionPopover>
      </Card>
    </Card>
  );
}

export default ButtonStyleGuide;

