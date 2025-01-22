import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from "../../components/button/button";
import { StyledList, StyledListItem } from './list.styles';


const List = ({ list, color, isColumn, styles, position, link }) => {
  const navigation = list.map(({ _id, name, icon }, i) => (
    <StyledListItem color={color} key={_id || i} position={position}>
      {icon && icon}
      {link && <Link to={`/${name}`}>{name.replace(/-/g, ' ')}</Link>}
      {!link && <Button bordered={false} kind="">{name.replace(/-/g, ' ')}</Button>}
    </StyledListItem>
  ))
  return (
    <StyledList style={styles} isColumn={isColumn}>
      {navigation}
    </StyledList>
  );
};

List.propTypes = {
  list: PropTypes.array,
  color: PropTypes.string,
  isColumn: PropTypes.bool,
  styles: PropTypes.object,
  position: PropTypes.string,
  link: PropTypes.bool,
};

export default List;
