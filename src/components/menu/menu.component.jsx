import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { StyledMenu } from './menu.styles';

const Menu = () => {
    return (
        <StyledMenu>
            <FaRegHeart />
            <MdOutlineShoppingCart />
            <FaRegUser />
        </StyledMenu>
    );
};

export default Menu;
