import { GET_DATA,ADD_DATA, ITEMS_LOADING,UPDATE } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';


export const getData = ram  => dispatch => {
    dispatch(setDataLoading());
    axios
        .get(`/api/items/${ram}`)
        .then(res => dispatch({
            type: GET_DATA,
            payload:res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err))
        );

};

export const setDataLoading = () => {
    return {
        type: ITEMS_LOADING,
        loading: true
    };
};

export const addData = (data,agb) => dispatch => {
    // console.log("axiosside:");
    console.log(data);
    axios
        .post(`/api/items/${agb}`,data)
        .then(res =>
            dispatch({
                type: ADD_DATA,
                payload: res.data
            }));
};

export const updateData = (data,agb) => dispatch => {
    // console.log("axiosside:");
    // console.log(data);
    axios
        .post(`/api/items/${agb}`,data)
        .then(res =>
            dispatch({
                type: UPDATE,
                payload: res.data
            }));
};