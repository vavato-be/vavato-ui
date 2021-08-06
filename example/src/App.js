import React from 'react'
import { ThemeProvider } from 'styled-components'

import { VavatoTheme, StyleGuide, GlobalStyle, ToasterManager } from 'vavato-ui'

const App = () => {
  return (
    <ThemeProvider theme={VavatoTheme}>
      <ToasterManager>
        <GlobalStyle />
        <StyleGuide />
      </ToasterManager>
    </ThemeProvider>
  )
}

export default App
