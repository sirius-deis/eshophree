import PropTypes from 'prop-types';

import { StyledList } from './list.styles';

import ListItem from '../listItem/listItem';

const List = ({ list, color, isColumn, styles, position, link }) => {
  const navigation = list.map((item, i) => (
    <ListItem color={color} key={item._id || i} position={position} link={link}>
      {item.name}
    </ListItem>
  ));
  return (
    <StyledList style={styles} isColumn={isColumn}>
      {navigation}
    </StyledList>
  );
};

List.propTypes = {
  list: PropTypes.array,
  color: PropTypes.string,
};

export default List;
