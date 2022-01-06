import { combineReducers } from 'redux';
import postreducer from '../reducers/postReducer';
import courseReducer from './coursereducer';
import authorReducer from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


export default combineReducers({
    posts: postreducer,
    courses : courseReducer,
    author : authorReducer,
    ajaxCallsInProgress : ajaxCallsInProgress 
});
