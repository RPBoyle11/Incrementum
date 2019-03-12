import {
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_ERROR
} from '../actions/words';

const initialState = {
  words: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_WORDS_SUCCESS: {
        return Object.assign({}, state, {
            words: [...action.words],
            error: null
        });
    } 
    case FETCH_WORDS_ERROR: {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    default:
      return state;
  }
}
