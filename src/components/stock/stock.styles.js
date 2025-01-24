import styled from 'styled-components';

export const StyledStock = styled.div`
  margin-top: 7rem;
  .progress {
    width: 100%;
    height: 2rem;
    position: relative;
    padding: 0.5rem 0;
  }
  .clock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .circle {
      padding: 1rem;
      background-color: var(--bg-darker);
      border-radius: 50%;
      font-size: 1.5rem;
    }
  }
`;

export const StyledProgress = styled.div`
  position: absolute;
  background-color: ${(props) => `var(--${props.bgColor})`};
  width: ${(props) => props.width}%;
  height: 1.5rem;
  border-radius: 1rem;
`;
