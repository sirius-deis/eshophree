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
    position: relative;
    padding: 1.4rem;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color 0.3s ease-out;
    &:hover {
        background-color: var(--footer-color);
    }
`;

const StyledCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 0;
    right: 0;
    padding: 0.5rem
    font-size: 1.5rem;
    background-color: var(--additional-color);
    border-radius: 50%;
    color: var(--bg-color);
`;

export { StyledMenu, StyledDropdownToggle, StyledCount };
