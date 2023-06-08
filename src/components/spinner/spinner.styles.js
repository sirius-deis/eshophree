import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(1px);
  z-index: 100;
`;

const StyledSpinner = styled.div`
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: conic-gradient(var(--footer-color) 10%, var(--additional-color-darker));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2rem), var(--text-color) 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: translate(-50%, -50%) rotate(1turn);
    }
  }
`;

export { StyledSpinner, StyledBackdrop };
