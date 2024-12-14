import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './BlogSlice';  // Blog reducer import
import commentReducer from './CommentSlice';  // Comment reducer import

export const makeStore = () => {
  return configureStore({
    reducer: {
      blog: blogReducer,   // Blog slice ko store mein add
      comments: commentReducer,   // Comment slice ko store mein add
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
