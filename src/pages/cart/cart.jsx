import { useSelector } from "react-redux";
import LabelWithInput from "../../components/label-with-input/labelWithInput";
import Button from "../../components/button/button";
import CustomTable from "../../components/customTable/customTable";
import QuantityChanger from "../../components/quantityChanger/quantityChanger";

const Cart = () => {
    const { cart, sum } = useSelector(state = state.cart)
    return <div className=''>
        <h1>Shopping Cart Summary</h1>
        <CustomTable columnsName={["Product", "Price", "Quantity", "Total"]}
            data={cart}
            wrappers={{ 2: (quantity) => <QuantityChanger quantity={quantity} /> }} />
        <div>
            <div>
                <LabelWithInput placeholder="Enter your coupon code" />
                <Button bgColor="green" color="white">Apply Coupon</Button>
            </div>
            <h3>Total: {sum}</h3>
        </div>
        <div>
            <Button bgColor="primary" color="white">Continue shopping</Button>
            <Button bgColor="warning" color="white">Proceed to checkout</Button>
        </div>
    </div>;
};

export default Cart;
