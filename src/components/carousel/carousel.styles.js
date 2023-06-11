import styled from 'styled-components';

const StyledCarousel = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledInner = styled.div`
  margin: 2rem 0 0.5rem;
  display: flex;
  flex-wrap: no-wrap;
  transition: all 0.3s ease-out;
`;

const StyledCarouseItem = styled.div`
  min-width: ${(props) => `calc(100%/${props.amount})`};
`;

const StyledControl = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 3rem;
  font-weight: 300;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: var(--shadow-color);
  }
  &:disabled {
    color: var(--footer-color);
  }
  &:disabled:hover {
    background-color: transparent;
  }
`;

const StyledPrevControl = styled(StyledControl)``;

const StyledNextControl = styled(StyledControl)``;

export { StyledCarousel, StyledInner, StyledCarouseItem, StyledPrevControl, StyledNextControl };
