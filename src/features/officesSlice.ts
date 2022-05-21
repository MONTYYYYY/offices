import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface IOfficesState {
    offices: any[];
    filteredOffices: any[];
    query: string;
}

const initialState:IOfficesState = {
  offices: [],
  filteredOffices: [],
  query: '',
};

export const officesSlice = createSlice({
  name: 'offices',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // setFilteredOffices: (state, newState) => {
    //   state.filteredOffices = [].concat(...newState.payload);
    // },
    // setQuery: (state, newState) => {
    //   state.query = newState.payload;
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

// eslint-disable-next-line no-empty-pattern
export const {} = officesSlice.actions;

export const selectOffices = (state: RootState) => state.offices;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default officesSlice.reducer;