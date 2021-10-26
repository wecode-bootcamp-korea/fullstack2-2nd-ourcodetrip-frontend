import * as styled from 'styled-components';
import reset from 'styled-reset';

export default styled.createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: #343a40;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: 400;
  }

  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  ul {
    list-style: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
