import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { clients } from './pages/clients/list/reducer'
import { reducer as formReducer } from 'redux-form'

export const history = createBrowserHistory()

export const createRootReducer = history =>
	combineReducers({
		clients,
		router: connectRouter(history),
		form: formReducer
	})
