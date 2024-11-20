import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/spinner/spinner";

const Product = () => {
    const { productId } = useParams();
    const [data, isLoading, error] = useFetch(`/products/${productId}`)
    if (isLoading) {
        return <Spinner />
    }
    return <div className=''>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <p>Category: <Link>{data.product.category}</Link></p>
            <h2>{data.product.title}</h2>
        </div>
    </div>;
};

export default Product;
