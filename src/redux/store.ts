import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import officesReducer from '../features/officesSlice';
import settingsReducer from '../features/settingsSlice';
import staffReducer from '../features/staffSlice';

export const store = configureStore({
  reducer: {
    offices: officesReducer,
    settings: settingsReducer,
    staff: staffReducer,

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
