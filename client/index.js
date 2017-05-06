import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App/>, document.getElementById('app'));

// Use react hot loader if enabled
if (module.hot) {
    module.hot.accept();
}