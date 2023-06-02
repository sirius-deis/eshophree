import styled from 'styled-components';

const StyledColoredContainer = styled.div`
  width: 100%;
  min-height: 70rem;
  padding: 4rem 0;
  background-color: var(--footer-color);
`;

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
`;

export { StyledHero, StyledColoredContainer };
