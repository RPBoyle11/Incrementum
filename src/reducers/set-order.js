import {
  FETCH_SET_ORDER_SUCCESS,
  FETCH_SET_ORDER_ERROR 
} from '../actions/words';

const initialState = {
   
  testResults: null,
  _id:null,
  error: null
};
 

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_CURRENT_SUCCESS) {
        console.log('Fetch Success: ', action);
        return Object.assign({}, state, {
          testResults: action.testResults,
          _id: action._id,
            error: null
        });
    } else if (action.type === FETCH_CURRENT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
  }