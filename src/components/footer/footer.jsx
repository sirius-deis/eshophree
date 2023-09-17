import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop className='container'>
        <img src={Logo} alt='Logo' width='120' height='auto' />
      </StyledFooterTop>
    </StyledFooter>
  );
};

export default Footer;
