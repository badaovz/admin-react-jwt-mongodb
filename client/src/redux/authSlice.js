import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
            success: false,
            message: ''
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
        },
        logout: {
            isFetching: false,
            error: false,
            success: false,
        },
        confirm: {
            code: null,
            isFetching: false,
            error: false,
            success: false,
        },
        resetPass: {
            isFetching: false,
            error: false,
            success: false,
        }

    },
    reducers: {
        loginStart: (state) => {
            state.login.error = false;
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            console.log('logout Success')
            state.login.success = true;
            state.login.currentUser = action.payload;
            state.login.isFetching = false;
            state.login.error = false;
            state.login.message = '';
        },
        loginFailed: (state) => {
            state.login.success = false;
            state.login.isFetching = false;
            state.login.error = true;
            state.login.message = 'username or password not exactly!'
        },

        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },

        logoutStart: (state) => {
            state.logout.error = false;
            state.logout.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.login.success = false;
            state.login.currentUser = null;
            state.logout.isFetching = false;
            state.logout.error = false;
            state.logout.success = true;
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
            state.logout.success = false;
        },

        confirmStart: (state) => {
            state.confirm.code = null;
            state.confirm.isFetching = true;
        },
        confirmSuccess: (state, action) => {
            state.confirm.isFetching = false;
            state.confirm.code = action.payload.code;
            state.confirm.success = true;
            state.confirm.error = false;
        },
        confirmFailed: (state) => {
            state.confirm.isFetching = false;
            state.confirm.error = true;
        },

        resetPassStart: (state) => {
            state.resetPass.isFetching = true;
        },
        resetPassSuccess: (state) => {
            state.resetPass.isFetching = false;
            state.resetPass.error = false;
            state.resetPass.success = true;
        },
        resetPassFailed: (state) => {
            state.resetPass.isFetching = false;
            state.resetPass.error = true;
            state.resetPass.success = false;
        },

    },
});

export const {
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
} = authSlice.actions;

export default authSlice.reducer;