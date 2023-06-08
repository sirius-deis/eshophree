import { StyledCard, StyledInfo } from './card.styles';
import Stock from '../stock/stock';

const Card = ({ isColumn }) => {
  return (
    <StyledCard>
      <img src='https://source.unsplash.com/random/300×350?electronics' alt='product' />
      <StyledInfo>
        <p>Headphone</p>
        <h3>Samsung Galaxy S10+, 128GB, Ceramic Black - Unlocked</h3>
        <p className='price'>
          $80.00
          <sup>
            <del>$100.00</del>
          </sup>
        </p>
        <Stock total={20} sold={7} endIn={new Date('2023-06-09')} />
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
