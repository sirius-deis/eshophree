import styled from "styled-components"

export const StyledAddress = styled.form`
  padding: 2rem;
  border: 1px solid var(--bg);
  border-radius: 8px;
  margin-bottom: 0.5rem;
`

export const StyledTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.5rem
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--bg-dark);
  border-radius: 4px;
  font-size: 1.6rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  gap: 10px;
  ${StyledInput} {
    flex: 1;
  }
`;

export const StyledDetailsContainer = styled.div`
  margin-top: 1rem;
`

export const StyledDetailParagraph = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;