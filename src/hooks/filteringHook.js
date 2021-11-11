import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteringAction } from '../store/filteringSlice';

export const useFiltering = () => {
  const { isFilterActive } = useSelector(state => state.filteringReducer);
  const dispatch = useDispatch();

  const setIsFilterActive = useCallback(
    value => {
      dispatch(filteringAction(value));
    },
    [dispatch]
  );

  return { isFilterActive, setIsFilterActive };
};
