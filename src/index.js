import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {Router, Route, Link, browserHistory } from 'react-router';
import reducers from './reducers';

import TimelogLibrary from './TimelogLibrary';
import Color from './renameme/style/Color';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={TimelogLibrary}>
                <Route path="style/color" component={Color}/>
            </Route>
        </Router>
    </Provider>
), document.querySelector('.container'));
