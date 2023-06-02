import styled from 'styled-components';

const StyledSignUp = styled.form`
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  padding: 3rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 4px 4px var(--shadow-color);
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  color: var(--text-color-additional);
`;

const StyleLine = styled.div`
  width: calc(50% - 6rem);
  height: 1px;
  background-color: var(--text-color-additional);
`;

export { StyledSignUp, StyledH2, StyleLine };
