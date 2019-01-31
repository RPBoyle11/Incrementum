import {
  FETCH_CURRENT_SUCCESS,
  FETCH_CURRENT_ERROR 
} from '../actions/words';

const initialState = { 
  userRefresh: {},
  error: null
};
 

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_CURRENT_SUCCESS) {
        console.log('Fetch Success: ', action);
        return Object.assign({}, state, {
            userRefresh: action.userRefresh,
            error: null
        });
    } else if (action.type === FETCH_CURRENT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
  }