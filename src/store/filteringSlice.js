import { createSlice } from '@reduxjs/toolkit';

const listFilterSlice = createSlice({
  name: 'listFilter',
  initialState: {
    isFilterActive: false,
  },
  reducers: {
    filteringAction: (state, action) => {
      state.isFilterActive = action.payload;
    },
  },
});

export const { filteringAction } = listFilterSlice.actions;
export default listFilterSlice.reducer;
