import styled from 'styled-components';

const StyledSearch = styled.form`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--footer-color);
    border-radius: 25px;
    overflow: hidden;
`;

const StyledSearchInput = styled.input`
    width: 75%;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    border: none;
    border-left: 1px solid var(--footer-color);
    background-color: transparent;
    &:focus {
        outline: none;
    }
`;

export { StyledSearch, StyledSearchInput };
