import styled from "styled-components";

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  &.bordered {
   border: 1px solid var(--bg-darker);
  }
  &.shadowed {
    box-shadow: 1px 2px 10px 2px rgba(2, 6, 23, 0.3);
  }
`;

