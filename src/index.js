import React from 'react'
import ReactDOM from 'react-dom'

import './scss/custom.scss'
import './setup'

import { Client } from './components'
import * as serviceWorker from './serviceWorker'

const gom = import('gom')

gom.then(gomlib => {
	// gomlib.greet("Hello from web assembly!!");
	ReactDOM.render(<Client />, document.getElementById('web_client'))
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
