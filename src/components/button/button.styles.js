import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    padding: 0.8rem 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border: 0;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor || 'var(--text-color)'};
    cursor: pointer;
    &:hover {
    }
`;

export { StyledButton };
