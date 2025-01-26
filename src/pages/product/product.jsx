import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/spinner/spinner";
import ProductDetail from "../../components/product-detail/productDetail";
import InfoBox from "../../components/infoBox/infoBox";

const Product = () => {
    const { productId } = useParams();
    const [data, isLoading, error] = useFetch(`/products/${productId}`)
    if (isLoading) {
        return <Spinner />
    }
    if (error) {
        return <InfoBox message={error.message} type="warning" />;
    }
    return <div>
        <ProductDetail {...data} />
    </div>;
};

export default Product;
