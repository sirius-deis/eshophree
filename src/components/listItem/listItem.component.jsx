import PropTypes from 'prop-types';

import { StyledListItem } from './listItem.styles';
import { Link } from 'react-router-dom';

const ListItem = ({ children }) => {
    return (
        <StyledListItem>
            <Link to={`/${children}`}>{children.replace(/-/g, ' ')}</Link>
        </StyledListItem>
    );
};

ListItem.propTypes = {
    children: PropTypes.node,
};

export default ListItem;
