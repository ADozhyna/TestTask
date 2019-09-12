import React from 'react'

import { render } from 'react-dom'
import { App } from './app'

render(<App />, document.getElementById('root'))

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./app', () => {
		render()
	})
}
