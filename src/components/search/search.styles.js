import styled from 'styled-components';

const StyledSearch = styled.form`
    width: 50%;
    display: grid;
    grid-template-columns: 4fr 10fr 1fr;
    border: 1px solid var(--text-color-additional);
    border-radius: 25px;
    overflow: hidden;
`;

const StyledSearchInput = styled.input`
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background-color: transparent;
`;

export { StyledSearch, StyledSearchInput };
