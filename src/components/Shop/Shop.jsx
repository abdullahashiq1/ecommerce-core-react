import { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // side effect from get localStorage
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart = [];
        // get id 
        for(const id in storedCart){
            // get product from using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // add quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
            setCart(saveCart);
        }
    }, [products])

    const addToCart = (product)=>{
        // cart.push(product)
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
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