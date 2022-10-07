import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';

import rootReducer from './reducer';
import {reduxStorage} from './storage';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [logger],
});

export const persistor = persistStore(store);
