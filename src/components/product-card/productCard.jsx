import PropTypes from "prop-types";
import { FaRegStar, FaStar, FaShoppingCart, FaPlusCircle } from "react-icons/fa";
import Heading from "../heading/heading";
import Button from "../button/button";

const ProductCard = ({ image, name, price, discount, characteristics, rating, tags, addToCartHandler, addToComparisonHandler }) => {

  return <div>
    <div>
      <img src={image.src} alt={image.name} />
    </div>
    <Heading>
      <h3>{name}</h3>
    </Heading>
    <div>
      <div>
        {tags.map((tag, i) => <span key={i} style={{ marginLeft: '5px', backgroundColor: 'lightgray', padding: '3px 5px', borderRadius: '5px' }}>{tag}</span>)}
      </div>
      <div>
        {discount <= 0 && `$${price}`}
        {discount > 0 && <span style={{ textDecoration: 'line-through', color: 'gray' }}>{price}</span>}
        {discount > 0 && <span style={{ color: 'red' }}>${price - (price * discount / 100)}</span>}
      </div>
      <div>
        {characteristics.map((characteristic, i) => <span key={i} style={{ marginLeft: '5px', backgroundColor: 'lightgray', padding: '3px 5px', borderRadius: '5px' }}>{characteristic}</span>)}
      </div>
      <div>
        {Array(5).fill(0).map((_, i) => rating >= i + 1 ? <FaStar key={i} data-testid="star-filled" /> : <FaRegStar key={i} data-testid="star-empty" />)}
      </div>
    </div>
    <div>
      <Button onClickHandler={addToComparisonHandler}><FaPlusCircle /> Compare</Button>
      <Button onClickHandler={addToCartHandler}>Add to Cart <FaShoppingCart /></Button>
    </div>
  </div>
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