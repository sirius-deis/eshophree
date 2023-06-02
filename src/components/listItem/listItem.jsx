import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledListItem } from './listItem.styles';

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
