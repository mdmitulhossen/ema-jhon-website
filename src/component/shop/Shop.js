import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddProduct = (product) => {
        const newcart = [...cart,product];
        setCart(newcart);
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product handleAddProduct = {handleAddProduct} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;