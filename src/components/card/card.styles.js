import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  img {
    width: 100%;
    max-width: ${(props) => (props.isColumn ? '100%' : '40%')};
    height: ${(props) => (props.height ? '70%' : '40rem')};
    border: 1px solid var(--footer-color);
    border-radius: 10px;
    object-fit: content;
  }
`;

const StyledInfo = styled.div`
  width: 100%;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isColumn ? '0.3rem' : '1.7rem')};
  padding-right: 3rem;
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
