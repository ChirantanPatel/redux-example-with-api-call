import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import Routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthores } from './actions/authorActions';
import '../node_modules/toastr/build/toastr.min.css';

const storeConfig = store();
storeConfig.dispatch(loadCourses());
storeConfig.dispatch(loadAuthores());
ReactDOM.render(
    <Provider store={storeConfig}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
