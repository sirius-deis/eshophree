import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCard, StyledInfo } from './card.styles';

const Card = ({
  children,
  isColumn,
  image,
  category,
  name,
  price,
  discount,
  total,
  sold,
  endIn,
}) => {
  return (
    <StyledCard
      style={{
        display: 'flex',
        flexDirection: isColumn ? 'column' : 'row',
      }}
      isColumn={isColumn}
    >
      <img src={image} alt='product' />
      <StyledInfo isColumn={isColumn}>
        <Link to={`/category/${category}`}>{category}</Link>
        <h3>{name}</h3>
        <p className='price'>
          ${price.toFixed(2)}
          <sup>
            <del>${((price / 100) * (price - discount)).toFixed(2)}</del>
          </sup>
        </p>
        {children && React.cloneElement(children, { total, sold, endIn })}
      </StyledInfo>
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  isColumn: PropTypes.bool,
  image: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  total: PropTypes.number,
  sold: PropTypes.number,
  endIn: PropTypes.object,
};

export default Card;
