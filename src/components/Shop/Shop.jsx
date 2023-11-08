import { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product)=>{
        // cart.push(product)
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;