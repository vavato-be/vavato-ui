import React from 'react'
import { ThemeProvider } from 'styled-components'
import { VavatoTheme, StyleGuide, ToasterManager } from 'vavato-ui'

const App = () => {
  return (
    <ThemeProvider theme={VavatoTheme}>
      <ToasterManager>
        <StyleGuide />
      </ToasterManager>
    </ThemeProvider>
  )
}

export default App
