import styled from 'styled-components';

const StyledCarousel = styled.div`
  grid-column: span 5;
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const StyledInner = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  transition: all 0.3s ease-out;
`;

const StyledCarouseItem = styled.div`
  min-width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 40rem;
    object-fit: content;
  }
`;

const StyledControl = styled.button`
  position: absolute;
  top: 50%;
  opacity: 0;
  padding: 0.7rem 1.4rem;
  font-size: 5rem;
  line-height: 1.5;
  transform: translateY(-50%);
  border: 0;
  background-color: var(--shadow-color);
  color: var(--bg-color);
  cursor: pointer;
  transition: opacity 0.1s ease-out;
  z-index: 10;
  &:hover {
    opacity: 1;
  }
`;

const StyledPrevControl = styled(StyledControl)`
  left: 0;
`;

const StyledNextControl = styled(StyledControl)`
  right: 0;
`;

const StyledIndicators = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  z-index: 10;
  button {
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid var(--bg-color);
    border-radius: 100px;
    background-color: var(--bg-color);
    transition: background-color 0.1s ease-out, width 0.2s ease-out;
    cursor: pointer;
    &:hover {
      background-color: var(--footer-color);
    }
    &.active {
      width: 3rem;
      background-color: var(--main-color);
    }
  }
`;

const StyledCarouselOverlay = styled.div`
  position: absolute;
  left: 60%;
  bottom: 30%;
  transform: translate(-60%, -30%);
`;

export {
  StyledCarousel,
  StyledInner,
  StyledCarouseItem,
  StyledPrevControl,
  StyledNextControl,
  StyledIndicators,
  StyledCarouselOverlay,
};
