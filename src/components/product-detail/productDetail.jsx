import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShippingFast, FaShoppingCart, FaRegStar, FaStar } from "react-icons/fa";
import Column from "../column/column";
import Heading from '../heading/heading';
import Row from "../row/row";
import Line from "../line/line";
import List from "../list/list";
import Panel from "../panel/panel";
import QuantityChanger from "../quantity-changer/quantityChanger";
import Button from "../button/button";

const ProductDetail = ({ categories, title, rating, reviewsNumber, sold, price,
  discount, characteristics, description, colorOptions, shipping, images }) => {
  const [sum, setSum] = useState(price);
  const [selectedImageN, setSelectedImageN] = useState(0);
  const discountedPrice = price - (price * discount / 100);

  const onChangeSumHandler = (n) => {
    setSum(currentState => currentState + n);
  }

  return <div>
    <Column>
      {/* add carousel for photos of product */}
    </Column>
    <Column>
      Categories: {categories.map(({ _id, title, href }) => <Link key={_id} to={href}>{title}</Link>).join(", ")}
      <Heading>
        <h2>{title}</h2>
      </Heading>
      <Row>
        <Column>
          {Array(rating).map((_, i) => rating >= i ? <FaStar /> : <FaRegStar />)}
          {<Link to="#reviews">Reviews ({reviewsNumber})</Link>}
        </Column>
        <Column>Sold: {sold}</Column>
      </Row>
      <Line />
      <Row>
        <Column>${discountedPrice.toFixed(2)}</Column>
        <Column><del>{price}</del></Column>
      </Row>
      <Row>
        <List list={characteristics} />
        <Line />
      </Row>
      <Row>
        <h3>About this item</h3>
        <List list={description} withDots />
      </Row>
    </Column>
    <Column>
      <Panel>
        ${sum}
        <div>
          <FaShippingFast /> {shipping}
        </div>
        <QuantityChanger sum={sum} changeFn={onChangeSumHandler} />
        Color
        <div>
          {/*add color picker*/}
        </div>
        <Button bgColor="danger" color="white">Add to Cart <FaShoppingCart /></Button>
        <Button bgColor="default" color="white">Buy now</Button>
      </Panel>
    </Column>
  </div>
}

ProductDetail.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({ _id: PropTypes.string, title: PropTypes.string, href: PropTypes.string })),
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsNumber: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  characteristics: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.string })),
  description: PropTypes.arrayOf(PropTypes.string),
  colorOptions: PropTypes.arrayOf(PropTypes.shape({ color: PropTypes.string, hex: PropTypes.string })),
  shipping: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
}

export default ProductDetail;