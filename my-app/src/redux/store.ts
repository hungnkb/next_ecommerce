import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './features/register-reducer';
import authReducer from './features/auth-reducer';

export const store = configureStore({
  reducer: {
    registerForm: registerReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
