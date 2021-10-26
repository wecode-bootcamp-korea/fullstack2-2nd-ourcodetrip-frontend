import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
