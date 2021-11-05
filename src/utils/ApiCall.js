export const ApiCall = async (url, method = 'POST', data = {}) => {
  const token = 'Bearer ' + localStorage.getItem('token');
  const request = {
    method,
    credentials: 'include',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  };
  if (method !== 'GET') {
    Object.assign(request, { body: JSON.stringify(data) });
  }
  return await fetch(url, request)
    .then(res => {
      if (!res.ok) throw new Error('Oops! Something went wrong 🍪🍪🍪');
      return res.json();
    })
    .catch(() => {
      return [];
    });
};

export const MultipleApiCall = async requests => {
  try {
    const result = await Promise.all(
      requests.map(({ url, method }) => {
        return ApiCall(url, method);
      })
    ).then(data => {
      return data;
    });
    return result;
  } catch (err) {
    return [];
  }
};
