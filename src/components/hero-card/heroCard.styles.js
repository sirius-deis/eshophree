import styled from 'styled-components';

const StyledCard = styled.div`
  grid-column: span 2;
  width: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 19.4rem;
    border-radius: 10px;
    object-fit: contain;
  }
`;

const StyledImageOverlay = styled.div`
  max-width: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 1rem;
  z-index: 10;
`;

export { StyledCard, StyledImageOverlay };
