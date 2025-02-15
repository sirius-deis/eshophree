import styled from 'styled-components';

export const StyledCarousel = styled.div`
  width: 100%;
`;

export const StyledInner = styled.div`
  margin: 2rem 0 0.5rem;
  display: flex;
  flex-wrap: no-wrap;
  transition: all 0.3s ease-out;
`;

export const StyledCarouseItem = styled.div`
  padding: 0.25rem;
  min-width: ${(props) => `calc(100%/${props.amount})`};
`;

export const StyledControl = styled.button`
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
    color: var(--bg-darker);
  }
  &:disabled:hover {
    background-color: transparent;
  }
`;

export const StyledPrevControl = styled(StyledControl)``;

export const StyledNextControl = styled(StyledControl)``;
