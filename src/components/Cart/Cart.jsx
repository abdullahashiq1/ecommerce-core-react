import './Cart.css';

const Cart = ({cart}) => {
    // const {cart} = props;

    // total calculate 
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart){
        totalPrice += product.price;
        shipping += product.shipping;
    }

    const tax = totalPrice * 7/100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery </h4>
            <p>Selected items: {cart.length}</p>
            <p>totalPrice Price: ${totalPrice}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h6 className='grand-total'>Grand total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;