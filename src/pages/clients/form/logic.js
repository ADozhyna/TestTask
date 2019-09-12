import { createLogic } from 'redux-logic'
import { saveClient } from './actions'
import { getFormValues } from 'redux-form'
import { receiveClient } from '../details/actions'

export default [
	createLogic({
		// declarative built-in functionality wraps your code
		type: saveClient, // only apply this logic to this type
		// cancelType: CANCEL_FETCH_POLLS, // cancel on this type
		latest: true, // only take latest

		// your code here, hook into one or more of these execution
		// phases: validate, transform, and/or process
		async process({ api, action, getState }, dispatch, done) {
			const client = getFormValues('client')(getState())
			const newClient = await api.clients.saveClient(client.id, client)
			dispatch(receiveClient(newClient))
			done()
		}
	})
]
