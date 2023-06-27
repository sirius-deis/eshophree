import styled from 'styled-components';

const StyledItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    backdrop-filter: brightness(90%);
  }
  img {
    display: flex;
    padding: 1rem;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
  }
  p {
    font-size: 2rem;
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

const CategoryItem = ({ children }) => {
  return <StyledItem>{children}</StyledItem>;
};

export default CategoryItem;
