import { css } from 'styled-components';

const calcRem = size => `${size / 16}rem`;

const WrapSize = '1060px';

const Wrapper = css`
  margin: 0 auto;
  width: ${WrapSize};
`;

const flexCenterContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fontSizes = {
  xs: calcRem(11),
  small: calcRem(12),
  underBase: calcRem(13),
  base: calcRem(14),
  lg: calcRem(15),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(38),
  titleSize_2: calcRem(48),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const borders = {
  basic: `1px solid #D6D6D6`,
  basicRadius: `5px`,
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  tabletL: '1024px',
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray_1: '#848c94',
  gray_2: '#666d75',
  gray_3: '#f4f4f4',
  gray_4: '#f8f9fa',
  darkGray: '#343a40',
  orange: '#FF9A00',
  primaryBlue: '#2B95EC',
  primaryBlue_2: '#51abf3',
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const shadow = {
  button:
    '0 0 0 1px rgba(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%), 0 4px 12px 0 rgb(0 0 0 / 5%)',
  hover:
    '0 0 0 1px rgb(0 0 0 / 15%), 0 2px 6px 0 rgb(0 0 0 / 5%), 0 8px 12px 0 rgb(0 0 0 / 20%)',
  heart: '0 0 2px rgb(0 0 0 / 30%)',
};

const buttons = {
  button_1: css`
    height: 40px;
    width: 110px;
    background: none;
    border: ${borders.basic};
    border-radius: ${borders.basicRadius};

    &:hover {
      box-shadow: ${shadow.button};
    }

    & span {
      color: #495056;
      font-size: ${fontSizes.base};
      font-weight: 500;
    }
  `,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  WrapSize,
  borders,
  shadow,
  EventTitle: css`
    color: ${colors.darkGray};
    font-size: ${fontSizes.xxl};
    font-weight: 600;
  `,
  Wrapper,
  buttons,
  flexCenterContainer,
};

export default theme;
