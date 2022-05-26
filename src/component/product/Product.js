import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';


const Product = (props) => {
    const {img,name,seller,price,stock} = props.product
    return (
        

        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <br />
                <p><small>Powered by : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='main-btn' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;