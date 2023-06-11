import PropTypes from 'prop-types';

import { StyledList } from './list.styles';

import ListItem from '../listItem/listItem';

const List = ({ list, color }) => {
  const navigation = list.map((item, i) => (
    <ListItem color={color} key={item._id || i}>
      {item.name}
    </ListItem>
  ));
  return <StyledList>{navigation}</StyledList>;
};

List.propTypes = {
  list: PropTypes.array,
};

export default List;
