'use strict';

import {COLOR_CHANGE} from '../actions'

export default (state = '', action)=> {
    switch (action.type) {
        case COLOR_CHANGE:
            return action.payload.color ? action.payload.color : '';
    }

    return state;
}