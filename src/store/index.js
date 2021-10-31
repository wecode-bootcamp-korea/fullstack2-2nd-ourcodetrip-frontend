import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './userSlice';
import tourTicketReducer from './tourTicketSlice';

const rootReducer = combineReducers({
  userReducer,
  tourTicketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export default store;
