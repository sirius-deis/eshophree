import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border: 0;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor || 'var(--text-color)'};
    cursor: pointer;
    &:hover {
    }
`;

const StyledRoundButton = styled(StyledButton)`
    margin: 0.5rem;
    padding: 0.3rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-size: 3rem;
    &:hover {
        transform: scale(1.2);
    }
`;

const StyledPlainButton = styled(StyledButton)`
    padding: 1.5rem 0 1.5rem 3rem;
`;

export { StyledButton, StyledRoundButton, StyledPlainButton };
