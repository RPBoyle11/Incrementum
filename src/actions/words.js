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

export const fetchWords = () => (dispatch) => {
    // const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/words`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        // headers: {
        //     // Provide our auth token as credentials
        //     // Authorization: `Bearer ${authToken}`
        // }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(words => dispatch(fetchWordsSuccess(words)))
        .catch(err => {
            dispatch(fetchWordsError(err));
        });
};
