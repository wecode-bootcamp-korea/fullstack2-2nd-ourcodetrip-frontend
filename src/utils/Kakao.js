export const KakaoLoginHandler = () => {
  window.Kakao.Auth.login({
    scope: 'profile_nickname,profile_image,account_email',
    success: authObj => {
      const bearer = 'Bearer' + ' ' + authObj.access_token;
      fetch('http://localhost:8001/users/auth/kakao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: bearer,
        },
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          localStorage.setItem('token', data.data);
          if (data.message === 'created') {
            alert('환영합니다');
          } else {
            alert('다시 시도해주세요');
          }
        });
    },
    fail: err => {
      alert(JSON.stringify(err));
    },
  });
};

export const KakaoLogoutHandler = () => {
  if (window.Kakao.Auth.getAccessToken()) {
    window.Kakao.Api.request({
      url: '/v1/user/unlink',
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      },
    });
  } else {
    console.log('Not logged in');
  }
};
