import { combineReducers } from 'redux';
import ColorReducer from './colorReducer'

const rootReducer = combineReducers({
    color: ColorReducer
});

export default rootReducer;