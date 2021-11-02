import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortingAction, initialAction } from '../store/tourTicketSlice';

const useTourTicket = () => {
  const { sortingCriteria } = useSelector(state => state.tourTicketReducer);
  const dispatch = useDispatch();

  const setTourTicketSorting = useCallback(
    ({ criteria, value } = null) => {
      dispatch(sortingAction({ criteria, value }));
    },
    [dispatch]
  );

  const setInitialAction = useCallback(() => {
    dispatch(initialAction());
  }, [dispatch]);

  return { sortingCriteria, setTourTicketSorting, setInitialAction };
};

export default useTourTicket;
