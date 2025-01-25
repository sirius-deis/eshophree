import PropTypes from "prop-types";
import Column from "../column/column";
import { Link } from "react-router-dom";
import Heading from '../heading/heading';
import { FaRegStar, FaStar } from "react-icons/fa6";
import Row from "../row/row";

const ProductDetail = ({ categories, title, rating, reviews }) => {
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
        </Column>
        <Column></Column>
        <Column></Column>
      </Row>
    </Column>
    <Column></Column>
  </div>
}

export default ProductDetail;