import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledListItem, StyledButton } from './listItem.styles';

const ListItem = ({ children, color, position, link }) => {
  return (
    <StyledListItem color={color} position={position}>
      {link && <Link to={`/${children}`}>{children.replace(/-/g, ' ')}</Link>}
      {!link && <StyledButton>{children.replace(/-/g, ' ')}</StyledButton>}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default ListItem;
