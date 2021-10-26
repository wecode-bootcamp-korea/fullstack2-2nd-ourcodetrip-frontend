import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export default store;
