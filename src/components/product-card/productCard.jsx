import PropTypes from "prop-types";
import { FaRegStar, FaStar, FaShoppingCart, FaPlusCircle } from "react-icons/fa";
import Heading from "../heading/heading";
import Button from "../button/button";
import { StyledButtons, StyledCharacteristic, StyledDiscountedPrice, StyledImage, StyledImageContainer, StyledPrice, StyledProductCard, StyledRating } from './productCard.styles'

const ProductCard = ({ image, name, price, discount, characteristics, rating, tags, addToCartHandler, addToComparisonHandler }) => {

  return <StyledProductCard>
    <StyledImageContainer>
      <StyledImage src={image.src} alt={image.name} />
    </StyledImageContainer>
    <Heading>
      <h3>{name}</h3>
    </Heading>
    <div>
      <div>
        {tags.map((tag, i) => <span key={i} style={{ marginLeft: '5px', backgroundColor: 'lightgray', padding: '3px 5px', borderRadius: '5px' }}>{tag}</span>)}
      </div>
      <StyledPrice>
        {discount <= 0 && `$${price}`}
        {discount > 0 && <span style={{ textDecoration: 'line-through', color: 'gray' }}>{price}</span>}
        {discount > 0 && <StyledDiscountedPrice style={{ color: 'red' }}>${price - (price * discount / 100)}</StyledDiscountedPrice>}
      </StyledPrice>
      <StyledCharacteristic>
        {characteristics.map((characteristic, i) => <span key={i} style={{ marginLeft: '5px', backgroundColor: 'lightgray', padding: '3px 5px', borderRadius: '5px' }}>{characteristic}</span>)}
      </StyledCharacteristic>
      <div>
        {Array(5).fill(0).map((_, i) => rating >= i + 1 ? <FaStar key={i} data-testid="star-filled" /> : <FaRegStar key={i} data-testid="star-empty" />)}
      </div>
    </div>
    <StyledButtons>
      <Button onClickHandler={addToComparisonHandler}><FaPlusCircle /> Compare</Button>
      <Button onClickHandler={addToCartHandler}>Add to Cart <FaShoppingCart /></Button>
    </StyledButtons>
  </StyledProductCard>
}

ProductCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  characteristics: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  addToCartHandler: PropTypes.func.isRequired,
  addToComparisonHandler: PropTypes.func.isRequired,
}

export default ProductCard;