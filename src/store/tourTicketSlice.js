import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortingCriteria: {
    category: '',
    sort: '',
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
        category: state.sortingCriteria.category,
        sort: state.sortingCriteria.sort,
      };
    },
    initialCategoryAction: state => {
      state.sortingCriteria = {
        ...state.sortingCriteria,
        category: '',
      };
    },
  },
});

export const { sortingAction, initialAction, initialCategoryAction } =
  tourTicketSlice.actions;
export default tourTicketSlice.reducer;
