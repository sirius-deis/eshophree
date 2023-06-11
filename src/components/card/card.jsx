import { StyledCard, StyledInfo } from './card.styles';
import Stock from '../stock/stock';

const Card = ({ isColumn, image, category, name, price, discount, total, sold, endIn }) => {
  return (
    <StyledCard>
      <img src={image} alt='product' />
      <StyledInfo>
        <p>{category}</p>
        <h3>{name}</h3>
        <p className='price'>
          ${price.toFixed(2)}
          <sup>
            <del>${((price / 100) * (price - discount)).toFixed(2)}</del>
          </sup>
        </p>
        <Stock total={total} sold={sold} endIn={endIn} />
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
