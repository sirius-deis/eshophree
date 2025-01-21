import styled from 'styled-components';

export const StyledCard = styled.div`
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
    height: ${(props) => (props.height ? '100%' : '40rem')};
    border: 1px solid var(--bg-darker);
    border-radius: 10px;
    object-fit: content;
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isColumn ? '0.3rem' : '1.7rem')};
  padding-right: 3rem;
  p {
    color: var(--text-color-darker);
  }
  h3 {
    font-size: 1.8rem;
    color: var(--primary-darker);
  }
  .price {
    font-size: 1.7rem;
    color: var(--primary);
    sup {
      font-size: 1.2rem;
      color: var(--text-color-darker);
    }
  }
`;
