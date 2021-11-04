import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortingCriteria: {
    categories: '',
    sort: 'date:desc',
    reviewScore: '',
    price: '',
    availableDate: '',
    confirm_type: '',
  },
};

const tourTicketSlice = createSlice({
  name: 'tourTicket',
  initialState,
  reducers: {
    sortingAction: (state, action) => {
      state.sortingCriteria[action.payload.criteria] = action.payload.value;
    },
    initialAction: state => {
      state.sortingCriteria = {
        ...initialState.sortingCriteria,
        categories: state.sortingCriteria.categories,
        sort: state.sortingCriteria.sort,
      };
    },
    initialCategoryAction: state => {
      state.sortingCriteria = {
        ...state.sortingCriteria,
        categories: '',
      };
    },
  },
});

export const { sortingAction, initialAction, initialCategoryAction } =
  tourTicketSlice.actions;
export default tourTicketSlice.reducer;
