import React from 'react';
import ReactDOM from 'react-dom';

// Relative path for styles injection
import styles from './assets/scss/main.scss';

import App from './components/App';

ReactDOM.render(<App/>, document.getElementById('app'));

// Hot Plugin: react hot loader
if (module.hot) {
    module.hot.accept();
}