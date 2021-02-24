import React, { useContext } from 'react';

import Card from '../Card';
import Toaster from  '../Toaster';
import ToasterContext from  '../ToasterContext';
import Button from '../Button'
import { faInfoCircle, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function ToasterStyleGuide() {
  const context = useContext(ToasterContext);
  const { success, error, info } = context;

  return (
    <Card>
      <div className="title">&lt;Toaster&gt; and &lt;ToasterManager&gt;</div>
      <p>
        Shows a flash message on the screen for a duration and then disappears.
      </p>
      <Card>
        <Toaster type="info" icon={faInfoCircle} key="1001">Hi i am a toaster</Toaster>
        <Toaster type="success" icon={faCheckCircle} key="1002">Hi i am a toaster</Toaster>
        <Toaster type="error" icon={faTimesCircle} key="1003">Hi i am a toaster</Toaster>
        <p>With ToasterManager in the page</p>
        <Button onClick={() => success("You are good at clicking")}>
          Success
        </Button>
        <Button onClick={() => info("Please, mind the gap")}>
          Info
        </Button>
        <Button onClick={() => error("These are not the droids you're looking for")}>
          Error
        </Button>
      </Card>
    </Card>
  );
}

export default ToasterStyleGuide;

