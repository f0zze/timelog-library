'use strict';
import Immutable from 'Immutable'
import {COLOR_CHANGE} from '../actions';

const initialState = Immutable.fromJS({});

export default (state = initialState, action)=> {
    switch (action.type) {
        case COLOR_CHANGE:
            return state;
    }

    return state;
}