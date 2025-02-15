import styled from 'styled-components';

export const StyledColoredContainer = styled.div`
  width: 100%;
  min-height: 80rem;
  padding: 4rem 0;
  background-color: var(--bg-darker);
`;

export const StyledHero = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
`;

export const StyledInfo = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  svg {
    font-size: 2.2rem;
  }
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  p:first-child {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--text-color-darker);
  }
  p:last-child {
    color: var(--text-color-darker);
  }
`;
