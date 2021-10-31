const dateDisplayFormat = dateInput => {
  const calcDate = (Date.now() - dateInput) / 1000 / 60 / 60 / 24;
  const createdDate = new Date(dateInput);
  const now = new Date().getDate();
  if (calcDate < 1 && createdDate.getDate() === now) return '오늘';
  else if (calcDate < 2) return '어제';
  else if (calcDate < 8) return `${Math.floor(calcDate)}일 전`;
  else
    return Intl.DateTimeFormat('ko-KR')
      .format(dateInput)
      .replaceAll('.', '')
      .replaceAll(' ', '-');
};

export default dateDisplayFormat;
