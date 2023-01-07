import axios from 'axios';
import {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    confirmStart,
    confirmSuccess,
    confirmFailed,
    resetPassStart,
    resetPassSuccess,
    resetPassFailed,
} from './authSlice';
import {
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailed,
} from './userSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/')
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('/auth/register', user);
        dispatch(registerSuccess());
        navigate('/users');
    } catch (err) {
        console.log(err)
        dispatch(registerFailed("Somethimg is wrong"));
    }
}

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getAllUsersStart());
    try {
        const res = await axiosJWT.get('/user', {
            headers: { token: `Bearer ${accessToken}`},
        });
        dispatch(getAllUsersSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersFailed());
    }
};


export const logoutUser = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post('/auth/logout', id, {
            headers: {token: `Bearer ${accessToken}`} ,
        });
        dispatch(logoutSuccess());
        localStorage.removeItem('persist:root');
        navigate('/login');
    } catch (err) {
        dispatch(logoutFailed());
    }
};

export const confirmUser = async (user, dispatch, navigate) => {
    dispatch(confirmStart());
    try {
        const res = await axios.post('/auth/confirmUser', user);
        dispatch(confirmSuccess(res.data));
        navigate('/login/forgot');
    } catch (err) {
        dispatch(confirmFailed());
    }
};

export const resetPass = async (user, dispatch, navigate) => {
    dispatch(resetPassStart());
    try {
        await axios.post('/auth/confirmCode', user);
        dispatch(resetPassSuccess());
        navigate('/login');
    } catch (err) {
        dispatch(resetPassFailed());
    }
};