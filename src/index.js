import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {Router, Route, Link, browserHistory } from 'react-router';
import reducers from './reducers';
import Store from './state/main-store'

import TimelogLibrary from './TimelogLibrary';
import Color from './renameme/style/Color';
import Tabs from './layout/tab/Tabs';
import data from './data/categoryies';


const createStoreWithMiddleware = applyMiddleware()(createStore);

function CRouter(component, tabs = [{name: "zhme"}]) {
    return class Zhme extends React.Component {
        render() {
            return React.createElement(component,{tabs})
        }
    }
}

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers,Store)}>
        <Router history={browserHistory}>
            <Route path="/" component={TimelogLibrary}>
                <Route path="style/color" component={Color}/>
                <Route path="/components/buttons" component={Tabs}>
                    <Route path="demo" component={data[2].subcategories[0].component.demo}/>
                    <Route path="options" component={data[2].subcategories[0].component.options}/>
                </Route>
            </Route>
        </Router>
    </Provider>
), document.querySelector('.container'));
