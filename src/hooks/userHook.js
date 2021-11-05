import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginAction,
  logoutAction,
  editUserInfoAction,
} from '../store/userSlice';

export const useUser = () => {
  const { isLogin, userInfo } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const login = useCallback(
    (userInfo, accessToken) => {
      dispatch(loginAction({ userInfo: userInfo, accessToken: accessToken }));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const editUserInfo = useCallback(
    userInfo => {
      dispatch(editUserInfoAction({ userInfo: userInfo }));
    },
    [dispatch]
  );

  return { isLogin, userInfo, login, logout, editUserInfo };
};
