import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {rootReducer} from '@redux/rootReducer.js';
import {Router} from 'react-router-dom';
import history from './history';

//Styles
import Styles from './styles/styles.scss';

//Component
import Application from '@pages';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Application />
            </Router>
        </Provider>
    );
};

render(<App />, document.getElementById('app'));
