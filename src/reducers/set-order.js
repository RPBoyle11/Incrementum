import {
  FETCH_SET_ORDER_SUCCESS,
  FETCH_SET_ORDER_ERROR
} from '../actions/words';

const initialState = {
   
  userInfo: null,
  error: null
};

export default function reducer(state = initialState, action) {

    if (action.type === FETCH_SET_ORDER_SUCCESS) {
        return Object.assign({}, state, {
          userInfo: action.userInfo,
          error: null
        });
    } else if (action.type === FETCH_SET_ORDER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
  }