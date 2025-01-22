import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  svg {
    font-size: 2.8rem;
    color: var(--main-color);
    cursor: pointer;
  }
`;

export const StyledDropdownToggle = styled.button`
  position: relative;
  padding: 1.8rem;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => (props.isOpen ? 'var(--bg-color)' : 'transparent')};
  border-radius: ${(props) => (props.isOpen ? 'unset' : '50%')};
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: background-color 0.3s ease-out;
  box-shadow: ${(props) => (props.isOpen ? '2px 2px 3px var(--shadow-color)' : 'unset')};
  &:hover {
    background-color: ${(props) => (props.isOpen ? 'unset' : 'var(--bg-darker)')};
  }
`;

export const StyledCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 2.9rem;
    height: 2.9rem;
    top: 0;
    right: 0;
    padding: 0.5rem
    font-size: 1.5rem;
    background-color: var(--warning);
    border-radius: 50%;
    color: var(--bg-color);
`;
