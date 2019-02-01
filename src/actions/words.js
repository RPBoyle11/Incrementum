import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import store from '../store';

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

export const FETCH_CURRENT_SUCCESS = 'FETCH_CURRENT_SUCCESS';
export const fetchCurrentSuccess = userRefresh => ({
    type: FETCH_CURRENT_SUCCESS,
    userRefresh,
    isfetching: false
});

export const FETCH_CURRENT_ERROR = 'FETCH_CURRENT_ERROR';
export const fetchCurrentError = error => ({
    type: FETCH_CURRENT_ERROR,
    error,
    isfetching: false
});

export const FETCH_CURRENT_REQUEST = 'FETCH_CURRENT_REQUEST';
export const fetchCurrentRequest = (isfetching) => ({
    type: FETCH_CURRENT_REQUEST,
    isfetching: true
});

export const FETCH_SET_ORDER_SUCCESS = 'FETCH_SET_ORDER_SUCCESS';
export const fetchSetOrderSuccess = (userInfo) => ({
    type: FETCH_SET_ORDER_SUCCESS,
    userInfo 
});

export const FETCH_SET_ORDER_ERROR = 'FETCH_SET_ORDER_ERROR';
export const fetchSetOrderError = (error) => ({
    type: FETCH_SET_ORDER_ERROR,
    error
});

export const fetchWords = () => (dispatch) => {
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

//FETCH CURRENT WORD
export const fetchCurrentWord = (userId) => (dispatch) => {
    dispatch(fetchCurrentRequest())
    return fetch(`${API_BASE_URL}/users/next/${userId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(currentWord => dispatch(fetchCurrentSuccess(currentWord)))
        .catch(err => {
            dispatch(fetchCurrentError(err));
        });
};

//PUT FOR CHANGING ORDER
export const fetchSetOrder = (testResults, userInfo) => (dispatch) => {
    const authToken = store.getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/next/${userInfo.id}/${testResults}`, {
        method: 'PUT',
        body: JSON.stringify(userInfo),
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Accept': 'application/json',
          'content-type': 'application/json'   
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(userInfo => dispatch(fetchSetOrderSuccess(userInfo)))
        .catch(err => {
            dispatch(fetchCurrentError(err));
        });
};