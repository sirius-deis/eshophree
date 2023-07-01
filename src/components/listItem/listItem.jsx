import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledListItem } from './listItem.styles';

const ListItem = ({ children, color }) => {
  return (
    <StyledListItem color={color}>
      <Link to={`/${children}`}>{children.replace(/-/g, ' ')}</Link>{' '}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default ListItem;
