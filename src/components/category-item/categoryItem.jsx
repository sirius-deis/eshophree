import PropTypes from 'prop-types';

import {StyledItem} from './categoryItem.styles'

const CategoryItem = ({ children }) => {
  return <StyledItem>{children}</StyledItem>;
};

CategoryItem.propTypes = {
  children: PropTypes.node,
};

export default CategoryItem;
