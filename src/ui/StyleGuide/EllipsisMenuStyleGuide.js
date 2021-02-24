import React from 'react';
import Card from '../Card';
import EllipsisMenu from  '../EllipsisMenu';
import LinkWithIcon from '../LinkWithIcon';

import { faCoffee, faTruck } from '@fortawesome/free-solid-svg-icons'

function EllipsisMenuStyleGuide() {
  return (
    <Card>
      <div className="title">&lt;EllipsisMenu&gt;</div>
      <p>
        A vertical ellipsis icon that triggers a dropdown menu.<br/>
        Elements passed in will be show inside the popup inside a list
      </p>
      <Card>
        <EllipsisMenu>
          <LinkWithIcon icon={faCoffee}
            key="coffee"
            onClick={() => alert("Here's your coffee")}>
            Take a break
          </LinkWithIcon>
          <LinkWithIcon icon={faTruck}
            key="truck"
            onClick={() => alert("A trucker stops by. He looks tired.")}>
            Hitch a hike
          </LinkWithIcon>
        </EllipsisMenu>
      </Card>
    </Card>
  );
}

export default EllipsisMenuStyleGuide;


