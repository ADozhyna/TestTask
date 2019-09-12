import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { Provider } from 'react-redux'
import { history, store } from './configureStore'

import { ConnectedRouter } from 'connected-react-router'

import Header from './components/Header'
import { Clients } from './pages/clients/list/container'
import { Home } from './pages/Home/index'
import ClientForm from './pages/clients/form'

export const App = () => (
	<AppContainer>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Header />
				<>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							exact
							path="/client-form"
							component={ClientForm}
						/>
						<Route
							exact
							path="/clients"
							render={() => <Clients />}
						/>
					</Switch>
				</>
			</ConnectedRouter>
		</Provider>
	</AppContainer>
)
