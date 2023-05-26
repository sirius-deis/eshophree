import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import {
    StyledHeader,
    StyledHeaderTop,
    StyledHeaderBottom,
} from './header.styles';
import Search from '../search/search.component';
import Menu from '../menu/menu.component';

const Header = () => {
    return (
        <StyledHeader>
            <div className='container'>
                <StyledHeaderTop>
                    <Link to='/'>
                        <img src={Logo} width='120' height='auto' alt='Logo' />
                    </Link>
                    <Search />
                    <Menu />
                </StyledHeaderTop>
                <StyledHeaderBottom></StyledHeaderBottom>
            </div>
        </StyledHeader>
    );
};

export default Header;
