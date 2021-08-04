import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { configureStore } from '@reduxjs/toolkit'

import {
  toasterReducer,
  VavatoTheme,
  StyleGuide,
  GlobalStyle,
  ToasterManager
} from 'vavato-ui'

const store = configureStore({
  reducer: {
    toasters: toasterReducer,
    environment: (state, action) => {
      if (!state) {
        state = typeof process !== 'undefined' && process.env ? process.env : {}
      }
      if (action.type !== 'environment') {
        return state
      }
      return { ...state, ...action.payload }
    }
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={VavatoTheme}>
        <ToasterManager>
          <GlobalStyle />
          <StyleGuide />
        </ToasterManager>
      </ThemeProvider>
    </Provider>
  )
}

export default App
