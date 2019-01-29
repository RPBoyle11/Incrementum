import {
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_ERROR
} from '../actions/words';

const initialState = {
  words: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_WORDS_SUCCESS) {
      console.log('Fetch Success: ', action);
      return Object.assign({}, state, {
          words: [...action.words],
          error: null
      });
  } else if (action.type === FETCH_WORDS_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}
