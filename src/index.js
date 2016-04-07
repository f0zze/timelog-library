import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router'
import TimelogLibrary from './TimelogLibrary';
import Color from './renameme/style/Color';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={TimelogLibrary}>
            <Route path="style/color" component={Color} />
        </Route>
    </Router>
), document.querySelector('.container'));
