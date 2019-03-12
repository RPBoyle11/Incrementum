import {
  FETCH_SET_ORDER_SUCCESS,
  FETCH_SET_ORDER_ERROR
} from '../actions/words';

const initialState = {
   
  userInfo: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SET_ORDER_SUCCESS: {
        return Object.assign({}, state, {
          userInfo: action.userInfo,
          error: null
        });
    } 
    case FETCH_SET_ORDER_ERROR: {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    default:
      return state;
    }
  }