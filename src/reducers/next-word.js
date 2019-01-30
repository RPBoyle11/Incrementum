import {
  FETCH_NEXT_SUCCESS,
  FETCH_NEXT_ERROR
} from '../actions/words';

const initialState = { 
  nextWord: {},
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_NEXT_SUCCESS) {
      console.log('Fetch Success: ', action);
      return Object.assign({}, state, {
          nextWord: action.nextWord,
          error: null
      });
  } else if (action.type === FETCH_NEXT_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}