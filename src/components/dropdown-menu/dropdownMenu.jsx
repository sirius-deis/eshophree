import PropTypes from 'prop-types';

import { StyledDropdownMenu } from './dropdownMenu.styles';

const DropdownMenu = ({ children }) => {
    return <StyledDropdownMenu>{children}</StyledDropdownMenu>;
};

DropdownMenu.propTypes = {
    children: PropTypes.node,
};

export default DropdownMenu;
