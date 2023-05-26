import styled from 'styled-components';

const StyledMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 2.8rem;
        color: var(--main-color);
        cursor: pointer;
    }
`;

const StyledDropdownToggle = styled.button`
    padding: 1.4rem;
    cursor: pointer;
    border: 0;
    background-color: transparent;
`;

export { StyledMenu, StyledDropdownToggle };
