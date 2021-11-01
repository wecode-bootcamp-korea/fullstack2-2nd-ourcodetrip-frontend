const generateOptions = (
  slideWidth,
  displayNumber,
  cardSpacing,
  cardImageHeight,
  cardContentHeight,
  showContent,
  showLikeButton,
  showController,
  showOptionalTickets,
  imagePosition,
  autoSliding,
  slideTiming,
  customCardStyle
) => {
  return {
    slideWidth,
    displayNumber,
    cardSpacing,
    get cardWidth() {
      return (
        (this.slideWidth - (this.displayNumber - 1) * this.cardSpacing) /
        this.displayNumber
      );
    },
    cardImageHeight,
    cardContentHeight,
    showContent,
    showLikeButton,
    showController,
    showOptionalTickets,
    imagePosition,
    autoSliding,
    slideTiming,
    customCardStyle,
  };
};

export const expCityCarousel = generateOptions(
  1060,
  6,
  20,
  107,
  0,
  false,
  false,
  true,
  false,
  'center',
  false,
  false,
  {}
);

export const tagCityCarousel = generateOptions(
  1060,
  6,
  20,
  185,
  0,
  false,
  false,
  true,
  false,
  'center',
  false,
  false,
  {}
);

export const cityCarousel = generateOptions(
  1060,
  4,
  20,
  333,
  0,
  false,
  false,
  true,
  false,
  'center',
  false,
  false,
  {
    border: 'none',
    boxShadow:
      '0 0 0 1px rgba(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%), 0 4px 12px 0 rgb(0 0 0 / 5%)',
  }
);

export const banner = generateOptions(
  1060,
  1,
  0,
  280,
  0,
  false,
  false,
  true,
  false,
  'center',
  true,
  4,
  { border: 'none' }
);

export const defaultOptions = generateOptions(
  1060,
  4,
  20,
  167,
  145,
  true,
  true,
  true,
  true,
  'center',
  false,
  null,
  {}
);

export const magazine = generateOptions(
  1060,
  3,
  20,
  280,
  0,
  false,
  false,
  true,
  false,
  'center',
  false,
  null,
  {}
);

export const listCards = generateOptions(
  1060,
  4,
  20,
  167,
  157,
  true,
  true,
  true,
  true,
  'center',
  false,
  null,
  {}
);

export const options2 = generateOptions(
  1060,
  2,
  20,
  167,
  145,
  true,
  false,
  true,
  true,
  'center'
);

export const options3 = generateOptions(
  1060,
  5,
  10,
  300,
  0,
  false,
  false,
  true,
  false,
  'center'
);

export const options4 = generateOptions(
  1060,
  3,
  20,
  167,
  145,
  true,
  true,
  true,
  true,
  'center'
);

export const options5 = generateOptions(
  1060,
  7,
  10,
  167,
  145,
  true,
  true,
  true,
  true,
  'center'
);
