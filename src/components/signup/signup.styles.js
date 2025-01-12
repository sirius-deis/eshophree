import styled from 'styled-components';

export const StyledSignup = styled.form`
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  position: relative;
  padding: 3rem 2.5rem;
  border-radius: 8px;
  background-color: var(--bg-color);
  box-shadow: 5px 4px 4px var(--shadow-color);
`;

export const StyledAccountLink = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  color: var(--text-color-additional);
  margin-top: 1rem;
`

export const StyledSocialSignup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`

export const StyledOrSignup = styled.p`
  color: var(--text-color-additional);
  font-size: 1.3rem;
`

export const StyledSocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;