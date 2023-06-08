import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  img {
    max-width: 40%;
    max-height: 35rem;
    border: 1px solid var(--footer-color);
    border-radius: 10px;
    object-fit: content;
  }
`;

const StyledInfo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  padding-right: 4rem;
  p {
    color: var(--text-color-additional);
  }
  h3 {
    font-size: 1.8rem;
    color: var(--secondary-color-darker);
  }
  .price {
    font-size: 1.7rem;
    color: var(--additional-color);
    sup {
      font-size: 1.2rem;
      color: var(--text-color-additional);
    }
  }
`;

export { StyledCard, StyledInfo };
