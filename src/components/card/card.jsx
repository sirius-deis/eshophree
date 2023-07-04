import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCard, StyledInfo } from './card.styles';
import Image from '../../assets/images/image-not-found.png';

const Card = ({
  children,
  isColumn,
  _id,
  images,
  categoryId: { _id: categoryId, name: categoryName },
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
      <img src={images?.length ? images[0] : Image} alt='product' />
      <StyledInfo isColumn={isColumn}>
        <Link to={`/category/${categoryId}`}>{categoryName}</Link>
        <Link
          to={`/product/${_id}`}
          style={{ fontSize: '2.5rem', color: 'var(--secondary-color-darker)' }}
        >
          {name}
        </Link>
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
