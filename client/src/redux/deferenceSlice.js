import { createSlice } from '@reduxjs/toolkit';

const deferenceSlice = createSlice({
    name: 'def',
    initialState: {
        sidebar: {
            isOpen: false,
        },
        isNotifyOpen: false,
        isMessageOpen: false,
        isDarkMode: false
    },
    reducers: {
        openSidebar: (state) => {
            state.sidebar.isOpen = true;
        },
        closeSidebar: (state) => {
            state.sidebar.isOpen = false;
        },
        notifyToggle: (state) => {
            state.isNotifyOpen = !state.isNotifyOpen;
        },
        messageToggle: (state) => {
            state.isMessageOpen = !state.isMessageOpen;
        },
        modeToggle: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }

    },
});

export const {
    openSidebar,
    closeSidebar,
    notifyToggle,
    messageToggle,
    modeToggle
} = deferenceSlice.actions;

export default deferenceSlice.reducer;
