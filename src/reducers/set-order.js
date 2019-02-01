import {
  FETCH_SET_ORDER_SUCCESS,
  FETCH_SET_ORDER_ERROR,
  // FETCH_SET_ORDER_REQUEST 
} from '../actions/words';

const initialState = {
   
  userInfo: null,
  // isfetching: null,
  error: null
};

export default function reducer(state = initialState, action) {

  // if (action.type === FETCH_SET_ORDER_REQUEST) {
  //   console.log('Fetch REQUEST: ', action);
  //   return Object.assign({}, state, {
  //     isfetching: true,
  //     // testResults: action.testResults,
  //     // _id: action._id,
  //     error: null
  //   });
  // }
    if (action.type === FETCH_SET_ORDER_SUCCESS) {
        console.log('Fetch Success: ', action);
        return Object.assign({}, state, {
          userInfo: action.userInfo,
          // isfetching: false,
          // testResults: action.testResults,
          // _id: action._id,
          error: null
        });
    } else if (action.type === FETCH_SET_ORDER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
            // isfetching: false
        });
    }
    return state;
  }