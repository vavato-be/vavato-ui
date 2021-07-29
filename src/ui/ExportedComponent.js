import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './GlobalStyle'
import VavatoTheme from './VavatoTheme'
import ToasterManager from './ToasterManager'
import EnvContext from './EnvContext'

/**
 * Applies basic styling to a component being exported from this
 * package into the angular app
 */
function ExportedComponent({ children, environment, store, ...props }) {
  function proppedChildren() {
    const childrenWithProps = React.Children.map(children, (child) => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props)
      }
      return child
    })
    return childrenWithProps
  }

  useEffect(() => {
    store.dispatch({
      type: 'environment',
      payload: environment
    })
  }, [environment, store])

  return (
    <React.Fragment>
      <Provider store={store}>
        <EnvContext.Provider value={environment}>
          <ToasterManager>
            <ThemeProvider theme={VavatoTheme}>
              <GlobalStyle />
              <div className='exported-component'>{proppedChildren()}</div>
            </ThemeProvider>
          </ToasterManager>
        </EnvContext.Provider>
      </Provider>
    </React.Fragment>
  )
}

export default ExportedComponent
