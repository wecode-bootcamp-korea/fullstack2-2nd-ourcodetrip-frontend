import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const displayRatingToStars = (rating, starStyle) => {
  const filledStars = new Array(Math.floor(rating)).fill(
    <BsStarFill style={starStyle} />
  );
  const emptyStars = new Array(5)
    .fill(<BsStar style={starStyle} />)
    .splice(0, Math.floor(5 - rating));
  if (rating % 1 !== 0) {
    const remainder = rating % 1;
    return [
      ...filledStars,
      remainder >= 0.5 ? (
        <BsStarFill style={starStyle} />
      ) : (
        <BsStarHalf style={starStyle} />
      ),
      ...emptyStars,
    ].map((item, key) => React.cloneElement(item, { key }));
  }
  return [...filledStars, ...emptyStars].map((item, key) =>
    React.cloneElement(item, { key })
  );
};

export default displayRatingToStars;
