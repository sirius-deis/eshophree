import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCard, StyledInfo } from './card.styles';
import Image from '../../assets/images/image-not-found.png';

const Card = ({
  children,
  isColumn,
  image,
  category,
  name,
  price,
  discount = 0,
  total,
  sold,
  endIn,
  height,
  styles,
}) => {
  return (
    <StyledCard
      style={{
        flexDirection: isColumn ? 'column' : 'row',
        ...styles,
      }}
      isColumn={isColumn}
      height={height}
    >
      <img src={image ? image : Image} alt='product' data-image={image} />
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
  price: PropTypes.number,
  discount: PropTypes.number,
  total: PropTypes.number,
  sold: PropTypes.number,
  endIn: PropTypes.object,
  height: PropTypes.string,
  styles: PropTypes.object,
};

export default Card;
