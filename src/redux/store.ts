import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import officesReducer from '../features/officesSlice';
import settingsReducer from '../features/settingsSlice';

export const store = configureStore({
  reducer: {
    offices: officesReducer,
    settings: settingsReducer,
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
