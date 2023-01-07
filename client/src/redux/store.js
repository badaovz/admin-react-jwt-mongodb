import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './authSlice';
import userSlice from './userSlice';
import deferenceSlice from './deferenceSlice';


export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: ['auth'],
  // blacklist: ['users']
}


const rootReducer = combineReducers({auth: authSlice, users: userSlice, def: deferenceSlice } );

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);