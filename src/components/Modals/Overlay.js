import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  mix-blend-mode: multiply;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #666d75;
  opacity: 0.9;
  z-index: 9000;
`;

export default Overlay;
