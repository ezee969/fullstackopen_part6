import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterBy: '' },
  reducers: {
    setFilter: (state, action) => {
      state.filterBy = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
