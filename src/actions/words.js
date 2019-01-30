import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const fetchWordsSuccess = words => ({
    type: FETCH_WORDS_SUCCESS,
    words
});

export const FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR';
export const fetchWordsError = error => ({
    type: FETCH_WORDS_ERROR,
    error
});

export const FETCH_NEXT_SUCCESS = 'FETCH_NEXT_SUCCESS';
export const fetchNextSuccess = nextWord => ({
    type: FETCH_NEXT_SUCCESS,
    nextWord
});

export const FETCH_NEXT_ERROR = 'FETCH_NEXT_ERROR';
export const fetchNextError = error => ({
    type: FETCH_NEXT_ERROR,
    error
});

export const fetchWords = () => (dispatch) => {
    // const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/words`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(words => dispatch(fetchWordsSuccess(words)))
        .catch(err => {
            dispatch(fetchWordsError(err));
        });
};

export const fetchNextWord = (userId) => (dispatch) => {
    // const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/next/${userId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        // headers: {
            // Provide our auth token as credentials
            // Authorization: `Bearer ${authToken}`
        // }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(nextWord => dispatch(fetchNextSuccess(nextWord)))
        .catch(err => {
            dispatch(fetchNextError(err));
        });
};