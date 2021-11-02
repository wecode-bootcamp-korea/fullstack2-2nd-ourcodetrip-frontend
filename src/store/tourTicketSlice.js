import { createSlice } from '@reduxjs/toolkit';

const tourTicketSlice = createSlice({
  name: 'tourTicket',
  initialState: {
    sortingCriteria: {
      categories: '',
      sort: 'date:desc',
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
    initialAction: state => {
      state.sortingCriteria = {
        categories: state.sortingCriteria.categories,
        sort: 'date:desc',
        reviewScore: '',
        price: '',
        availableDate: '',
        confirm_type: '',
      };
    },
  },
});

export const { sortingAction, initialAction } = tourTicketSlice.actions;
export default tourTicketSlice.reducer;
