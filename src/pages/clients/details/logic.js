import { createLogic } from 'redux-logic'
import { deleteClient } from './actions'

export default [
	createLogic({
		// declarative built-in functionality wraps your code
		type: deleteClient, // only apply this logic to this type
		// cancelType: CANCEL_FETCH_POLLS, // cancel on this type
		latest: true, // only take latest

		// your code here, hook into one or more of these execution
		// phases: validate, transform, and/or process
		async process({ api, action }, dispatch, done) {
			await api.clients.deleteClient(action.payload.id)
			done()
		}
	})
]
