import styled from 'styled-components';

const StyledBanner = styled.div`
  min-width: 25rem;
  min-height: 100%;
  flex: 1;
`;

const Banner = ({ background }) => {
  return <StyledBanner style={{ background: `center / contain no-repeat url(${background})` }} />;
};

export default Banner;
