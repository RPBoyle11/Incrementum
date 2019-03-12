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
  switch(action.type) {
    case FETCH_CURRENT_REQUEST: {
        return Object.assign({}, state, {
          isfetching: action.isfetching,
          error: null
        });
      }

    case FETCH_CURRENT_SUCCESS: {
        return Object.assign({}, state, {
            userRefresh: action.userRefresh,
            isfetching: action.isfetching,
            error: null
        });
    } 
    case FETCH_CURRENT_ERROR: {
        return Object.assign({}, state, {
            error: action.error,
            isfetching: action.isfetching
        });
    }
    default:
      return state;
    }
  }