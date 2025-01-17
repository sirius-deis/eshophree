import styled from 'styled-components';

export const StyledBanner = styled.div`
  min-width: 25rem;
  min-height: 100%;
  flex: 1;
  background: ${(props) => `background: center / contain no-repeat url(${props.background})`};
`;