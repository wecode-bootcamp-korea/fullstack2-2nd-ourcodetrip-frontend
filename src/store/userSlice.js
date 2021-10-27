import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userInfo: { name: '' },
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, { payload }) => {
      state.isLogin = true;
      state.userInfo = payload.userInfo || {
        name: '유저 이름이 입력되지 않았습니다.',
      };
      state.accessToken = payload.accessToken || '';
    },
    logoutAction: () => {
      return initialState;
    },
    editUserInfoAction: (state, { payload }) => {
      state.userInfo = { ...state.userInfo, ...payload };
    },
    changeUserInfo: (st, pl) => {
      //payload안에 있는 유저 정보를 setState
    },
  },
});

export const { loginAction, logoutAction, editUserInfoAction } =
  userSlice.actions;
export default userSlice.reducer;
