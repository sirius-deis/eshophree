import { MdOutlineGpsFixed, MdOutlinePhone, MdSend } from 'react-icons/md';
import Logo from '../../assets/images/logo.png';
import List from '../list/list';
import ListItem from '../listItem/listItem';
import Heading from '../heading/heading';
import {StyledFooter, StyledFooterTop, StyledBlock} from './footer.styles'

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

const customerList = [
  { name: 'My Account' },
  { name: 'Track your Order' },
  { name: 'Customer Service' },
  { name: 'Returns/Exchange' },
  { name: 'FAQs' },
  { name: 'Product Support' },
];

const contactList = [
  { name: '0000 Lorem Street  Lorem, IL 540353 Dolor sit amet', icon: <MdOutlineGpsFixed /> },
  { name: '+8(000)123 4567', icon: <MdOutlinePhone /> },
  { name: 'eshophree@support.com', icon: <MdSend /> },
];

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop className='container'>
        <img src={Logo} alt='Logo' width='120' height='120' />
        <StyledBlock>
          <H2>Get Help</H2>
          <List
            isColumn={true}
            list={helpList}
            link
            color='--text-color'
            styles={{ fontSize: '1.4rem' }}
          />
        </StyledBlock>
        <StyledBlock>
          <Heading><h2>Popular categories</h2></Heading>
          <List
            isColumn={true}
            list={popularList}
            link
            color='--text-color'
            styles={{ fontSize: '1.4rem' }}
          />
        </StyledBlock>
        <StyledBlock>
          <Heading><h2>Customer Care</h2></Heading>
          <List
            isColumn={true}
            list={customerList}
            link
            color='--text-color'
            styles={{ fontSize: '1.4rem' }}
          />
        </StyledBlock>
        <StyledBlock>
          <heading><h2>Contact</h2></heading>
          <li>
            {contactList.map((item) => {
              return <ListItem icon={item.icon}>{item.name}</ListItem>;
            })}
          </li>
        </StyledBlock>
      </StyledFooterTop>
    </StyledFooter>
  );
};

export default Footer;
