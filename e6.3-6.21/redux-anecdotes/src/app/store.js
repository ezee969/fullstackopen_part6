import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from '../components/Anecdote/anecdoteSlice';
import notificationReducer from '../components/Notification/NotificationSlice';
import filterReducer from '../components/Filter/filterSlice';

export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});
