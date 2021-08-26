# vavato-ui

> Vavato UI components and styleguide

[![NPM](https://img.shields.io/npm/v/vavato-ui.svg)](https://www.npmjs.com/package/vavato-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project can be accessed [here](https://vavato-be.github.io/vavato-ui/).

## Install

```bash
npm install --save vavato-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'vavato-ui'
import 'vavato-ui/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Development

In order to test unreleased versions locally, you can do the following steps:

1. `npm pack` to generate a \*.tgz file with the current version of this library.
2. Go to whichever project you want to use this in and do: `npm install VAVATO_UI_DIRECTORY/*.tgz`.

## License

MIT © [vavato-be](https://github.com/vavato-be)
