import styled from 'styled-components';

const StyledHeader = styled.header`
    min-width: 100%;
    min-height: 3rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeaderTop = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { StyledHeader, StyledHeaderTop };
