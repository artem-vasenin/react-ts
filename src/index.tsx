import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

const AppWithMUI = () => (
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
);

ReactDOM.render(<AppWithMUI/>, document.getElementById('root'));

serviceWorker.unregister();
