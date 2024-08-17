import styled from "styled-components";

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: bold;
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-color-additional)"};
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
`;
