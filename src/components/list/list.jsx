import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from "../../components/button/button";
import { StyledList, StyledListItem } from './list.styles';


const List = ({ list, color, isColumn, styles, position, isLink, isButton, withDots }) => {
  const navigation = list.map(({ _id, name, icon }, i) => (
    <StyledListItem color={color} key={_id || i} position={position}>
      {icon && icon}
      {isLink && <Link to={`/${name}`}>{name.replace(/-/g, ' ')}</Link>}
      {isButton && <Button bordered={false} kind="">{name.replace(/-/g, ' ')}</Button>}
      {!isLink && !isButton && name}
    </StyledListItem>
  ))
  return (
    <StyledList style={styles} isColumn={isColumn} withDots={withDots}>
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
  isLink: PropTypes.bool,
  isButton: PropTypes.bool,
};

export default List;
