import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
// import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';
import tourTicketReducer from './tourTicketSlice';
import filteringReducer from './filteringSlice';

const persistConfig = {
  key: 'root',
  // storage: storageSession,
  storage: storage,
};

const rootReducer = combineReducers({
  userReducer,
  tourTicketReducer,
  filteringReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
