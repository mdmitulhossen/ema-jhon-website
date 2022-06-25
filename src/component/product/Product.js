import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props.product)
    const {img,name,seller,price,stock,id} = props.product
    return (
        

        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3><Link to={"/product/" +id}>{name}</Link></h3>
                <br />
                <p><small>Powered by : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.showAddCart && <button className='main-btn' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
            
        </div>
    );
};

export default Product;