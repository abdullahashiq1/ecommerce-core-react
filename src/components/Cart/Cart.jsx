import './Cart.css';

const Cart = ({cart}) => {
    // const {cart} = props;

    // total calculate 
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        shipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = totalPrice * 7/100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery </h4>
            <p>Selected items: {quantity}</p>
            <p>totalPrice Price: ${totalPrice}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <hr />
            <h6 className='grand-total'>Grand total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;