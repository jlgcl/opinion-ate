import {combineReducers} from 'redux
import { STORE_RESTAURANTS } from './actions';

/// Created during E2E tests, and used with actual API aftwards ///

// receives dispatched actions from actions.js ('dispatch(storeRestaurants(record))')
const records = (state = [], action) => {
    switch(action.type) {
        case STORE_RESTAURANTS:
            return action.records;
        default: 
            return state;
    }
};

export default combineReducers({
    records,
})