import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortingAction } from '../store/tourTicketSlice';

const useTourTicket = () => {
  const { sortingCriteria } = useSelector(state => state.tourTicketReducer);
  const dispatch = useDispatch();

  const setTourTicketSorting = useCallback(({ criteria, value } = null) => {
    dispatch(sortingAction({ criteria, value }));
  }, []);

  return { sortingCriteria, setTourTicketSorting };
};

export default useTourTicket;
