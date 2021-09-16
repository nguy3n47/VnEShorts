import { Windmill } from '@windmill/react-ui'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import customize from './styles/customize.js'
import './styles/index.css'

ReactDOM.render(
  <Windmill theme={customize}>
    <App />
  </Windmill>,
  document.getElementById('root')
)
