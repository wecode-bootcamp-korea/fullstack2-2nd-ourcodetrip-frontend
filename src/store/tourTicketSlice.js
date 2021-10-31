import { createSlice } from '@reduxjs/toolkit';

const tourTicketSlice = createSlice({
  name: 'tourTicket',
  initialState: {
    sortingCriteria: {
      categories: '',
      sort: '',
      reviewScore: '',
      price: '',
      availableDate: '',
      confirm_type: '',
    },
  },
  reducers: {
    sortingAction: (state, action) => {
      state.sortingCriteria[action.payload.criteria] = action.payload.value;
    },
  },
});

export const { sortingAction } = tourTicketSlice.actions;
export default tourTicketSlice.reducer;
