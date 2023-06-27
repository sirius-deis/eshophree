import React from 'react';
import { Link } from 'react-router-dom';
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

export default Card;
