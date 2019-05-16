import React from 'react';
import {render} from 'react-dom';

import css from './client/styles/style.css';
import App from './client/components/App.js';
import Single from './client/components/Single.js';
import CardsGrid from './client/components/CardsGrid.js';

import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux';
import store, {history} from './client/store';

import * as serviceWorker from './serviceWorker';


const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path='/' component={CardsGrid} />
					<Route path='/view/:postId' component={Single}></Route>
				</Switch>
			</App>
		</BrowserRouter>
	</Provider>
)


render(router, document.getElementById('root'));

serviceWorker.unregister();