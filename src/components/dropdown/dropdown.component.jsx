import PropTypes from 'prop-types';

import { StyledDropdown } from './dropdown.styles';

const Dropdown = ({ children }) => {
    return <StyledDropdown>{children}</StyledDropdown>;
};

Dropdown.propTypes = {
    children: PropTypes.node,
};

export default Dropdown;
