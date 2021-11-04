import userReducer, {
  loginAction,
  logoutAction,
  editUserInfoAction,
} from './userSlice';

describe('user reducer', () => {
  const initialState = {
    isLogin: false,
    userInfo: { name: 'initialName' },
    accessToken: 'initialToken',
  };

  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      isLogin: false,
      userInfo: { name: '' },
      accessToken: '',
    });
  });

  it('should handle login', () => {
    const actual = userReducer(
      initialState,
      loginAction({ userInfo: { name: '이욱창' } })
    );
    expect(actual).toEqual({
      isLogin: true,
      userInfo: { name: '이욱창' },
      accessToken: '',
    });
  });

  it('should handle logout', () => {
    const actual = userReducer(initialState, logoutAction());
    expect(actual).toEqual({
      isLogin: false,
      userInfo: { name: '' },
      accessToken: '',
    });
  });
  //1
  it('should handle editUserInfo', () => {
    const actual = userReducer(
      initialState,
      editUserInfoAction({
        name: 123,
      })
    );
    expect(actual).toEqual({
      isLogin: false,
      userInfo: { name: 123 },
      accessToken: 'initialToken',
    });
  });
});
