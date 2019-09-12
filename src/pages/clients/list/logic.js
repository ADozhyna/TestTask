import { createLogic } from 'redux-logic'
import { requestClients, receiveClients } from './actions'

export default [
	createLogic({
		// declarative built-in functionality wraps your code
		type: [requestClients], // only apply this logic to this type
		// cancelType: CANCEL_FETCH_POLLS, // cancel on this type
		latest: true, // only take latest

		// your code here, hook into one or more of these execution
		// phases: validate, transform, and/or process
		async process({ api }, dispatch, done) {
			const clients = await api.clients.fetchClients()
			dispatch(receiveClients(clients))
			done()
		}
	})
]
