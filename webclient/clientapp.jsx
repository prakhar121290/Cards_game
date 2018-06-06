import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './components/Home.jsx';
import ParentComponent from './components/UILayout/Parent.jsx';



import {Route, Router, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
	<MuiThemeProvider>
		<Router history ={hashHistory} >
			<Route path="/" component={ParentComponent}>
				<IndexRoute component={Home} />
			</Route>
		</Router>
	</MuiThemeProvider>,
 document.getElementById('mountapp'));
