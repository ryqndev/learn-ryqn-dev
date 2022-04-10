import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './i18n';

render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
