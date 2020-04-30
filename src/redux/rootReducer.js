import {combineReducers} from 'redux';
import {graphReducer} from './graphReducer';
import {appReducer} from './appReducer';

export const rootReducer = combineReducers({
    graphs: graphReducer,
    app: appReducer
});
