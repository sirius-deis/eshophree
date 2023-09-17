import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import List from '../list/list';
import H2 from '../h2/h2';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBlock = styled.div``;

const helpList = [
  { name: 'Delivery Information' },
  { name: 'Sale Terms & Conditions' },
  { name: 'Returns & Refunds' },
  { name: 'Privacy Notice' },
  { name: 'Shopping FAQs' },
];

const popularList = [
  { name: 'Laptops & Computers' },
  { name: 'Cameras & Photography' },
  { name: 'Smart Phones & Tablets' },
  { name: 'Video Games & Consoles' },
  { name: 'TV & Audio' },
  { name: 'Gadgets' },
  { name: 'Waterproof Headphones' },
];

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop className='container'>
        <img src={Logo} alt='Logo' width='120' height='auto' />
        <StyledBlock>
          <H2>Get Help</H2>
          <List isColumn={true} list={helpList} />
        </StyledBlock>
        <StyledBlock>
          <H2>Popular categories</H2>
          <List isColumn={true} list={popularList} />
        </StyledBlock>
      </StyledFooterTop>
    </StyledFooter>
  );
};

export default Footer;
