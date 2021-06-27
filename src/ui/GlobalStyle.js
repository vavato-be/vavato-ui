import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

/**
 * Global CSS stylesheet for all components exported by this package
 */

// Can't export default, createGlobalStyle doesn't return a function
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // You can continue writing global styles here
  .exported-component {
    padding: 0;
    font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    font-size: 16px;
    box-sizing: content-box !important;
  }
  .exported-component *, .exported-component *::before, .exported-component *::after {
    box-sizing: content-box !important;
  }

  .exported-component h1, .exported-component h2, .exported-component h3, .exported-component h4, .exported-component h5, .exported-component h6 {
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
    font-weight: 700 !important;
  }

  .exported-component h1 {
    font-weight: 700;
    font-size: 24px;
    margin: 32px 0;
  }

  .exported-component h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .exported-component a, .exported-component a:visited, .exported-component a:active, .exported-component a:hover {
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }

  .exported-component a:hover {
    text-decoration: underline;
  }

  .exported-component span.pre {
    display: inline-block;
    color: #e41f5d;
    background: #ececec;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 2px 4px;
    font-family: monospace;
  }


  .exported-component .primary {
    color: ${(props) => props.theme.primary};
  }

  .exported-component .secondary {
    color: ${(props) => props.theme.secondary};
  }
`
