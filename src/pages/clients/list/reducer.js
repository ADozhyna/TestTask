import { handleActions } from 'redux-actions'
import { requestClients, receiveClients } from './actions'
import { receiveClient, deleteClient } from '../details/actions'
import { combineReducers } from 'redux'

export const records = handleActions(
	{
		[receiveClients.toString()]: (state, action) => {
			return action.payload
		},

		[receiveClient.toString()]: (state, action) => {
			const newClient = action.payload
			const i = state.indexOf(oldClient => {
				return oldClient.id === newClient.id
			})

			return [...state.slice(0, i), newClient, ...state.slice(i + 1)]
		},

		[deleteClient.toString()]: (state, action) => {
			const deletedClient = action.payload
			return state.filter(client => client.id !== deletedClient.id)
		}
	},
	[]
)

export const isFetching = handleActions(
	{
		[requestClients.toString()]: (state, action) => true,

		[receiveClients.toString()]: (state, action) => false
	},
	false
)

export const clients = combineReducers({
	records,
	isFetching
})
