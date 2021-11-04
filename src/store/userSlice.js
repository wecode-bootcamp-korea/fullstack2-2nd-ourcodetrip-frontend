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
  },
});

export const { loginAction, logoutAction, editUserInfoAction } =
  userSlice.actions;
export default userSlice.reducer;
