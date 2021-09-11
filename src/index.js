import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './global-styles'
import { StoreProvider } from './context/store'

ReactDOM.render(
  <StoreProvider>
    <GlobalStyles />
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
