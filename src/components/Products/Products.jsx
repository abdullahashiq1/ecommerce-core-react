import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {img, name, seller, price, ratings, stock} = props.product;
    const handleAddToCart = props.addToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className="product-name">{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)}
             className='btn-cart'>
             Add to Cart
             <FontAwesomeIcon icon={faShoppingCart} />
             </button>
        </div>
    );
};

export default Products;