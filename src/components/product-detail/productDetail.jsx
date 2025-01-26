import PropTypes from "prop-types";
import Column from "../column/column";
import { Link } from "react-router-dom";
import Heading from '../heading/heading';
import { FaRegStar, FaStar } from "react-icons/fa6";
import Row from "../row/row";
import Line from "../line/line";
import List from "../list/list";

const ProductDetail = ({ categories, title, rating, reviewsNumber, sold, price, discount, characteristics, description }) => {
  const discountedPrice = price - (price * discount / 100);
  return <div>
    <Column></Column>
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
    <Column></Column>
  </div>
}

export default ProductDetail;