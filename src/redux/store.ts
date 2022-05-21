import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import officesReducer from '../features/officesSlice';

export const store = configureStore({
  reducer: {
    offices: officesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
