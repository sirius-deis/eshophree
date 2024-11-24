import LabelWithInput from "../../components/label-with-input/labelWithInput";
import Button from "../../components/button/button";

const Cart = () => {
    return <div className=''>
        <h1>Shopping Cart Summary</h1>
        <div>
            <LabelWithInput placeholder="Enter your coupon code" />
            <Button bgColor="green" color="white">Apply Coupon</Button>
        </div>
    </div>;
};

export default Cart;
