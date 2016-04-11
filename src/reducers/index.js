import { combineReducers } from 'redux';
import ColorReducer from './color-reducer'

const rootReducer = combineReducers({
    color: ColorReducer
});

export default rootReducer;