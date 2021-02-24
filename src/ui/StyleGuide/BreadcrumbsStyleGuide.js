import React from 'react';

import Card from '../Card';
import Breadcrumbs from '../Breadcrumbs';

function BreadcrumbsStyleGuide() {
  return (
    <Card>
      <div className="title">&lt;Breadcrumbs&gt;</div>
      <p>
        Shows a sequence of links representing the path to the current URL.
        Does not automatically process browser history.
      </p>
      <Card>
        <Breadcrumbs>
          <a href="/">Home</a>
          <span className="active">Style Guide</span>
        </Breadcrumbs>
      </Card>
    </Card>
  );
}

export default BreadcrumbsStyleGuide;

