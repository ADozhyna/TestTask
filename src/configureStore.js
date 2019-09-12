import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
import {
	createBrowserHistory
} from 'history'
import {
	createLogger
} from 'redux-logger'
import {
	routerMiddleware
} from 'connected-react-router'
import {
	createRootReducer
} from './rootReducer'
import { createLogicMiddleware } from 'redux-logic';

import logic from './logic'
import api from './api'

const logicMiddleware = createLogicMiddleware(
	logic, // array of logic items, no duplicate refs to same logic
	// optional injected deps/config, supplied to logic
	{ api }   
);

export const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	createRootReducer(history), {},
	composeEnhancer(
		applyMiddleware(
			logicMiddleware,
			routerMiddleware(history),
			createLogger()
		)
	)
)

// Hot reloading
if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('./rootReducer', () => {
		store.replaceReducer(createRootReducer(history));
	});
}

// For reducers hot reloading
store.replaceReducer(createRootReducer(history))