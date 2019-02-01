import {
  FETCH_CURRENT_SUCCESS,
  FETCH_CURRENT_ERROR,
  FETCH_CURRENT_REQUEST 
} from '../actions/words';

const initialState = { 
  userRefresh: {},
  isfetching: false,
  error: null
};
 

export default function reducer(state = initialState, action) {

    if (action.type === FETCH_CURRENT_REQUEST) {
        console.log('Fetch REQUEST: ', action);
        return Object.assign({}, state, {
          isfetching: action.isfetching,
          // testResults: action.testResults,
          // _id: action._id,
          error: null
        });
      }

    if (action.type === FETCH_CURRENT_SUCCESS) {
        console.log('Fetch Success: ', action);
        return Object.assign({}, state, {
            userRefresh: action.userRefresh,
            isfetching: action.isfetching,
            error: null
        });
    } else if (action.type === FETCH_CURRENT_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            isfetching: action.isfetching
        });
    }
    return state;
  }