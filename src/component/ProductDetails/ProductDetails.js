import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../product/Product';

const ProductDetails = () => {
    const {productId}=useParams();
    const product = fakeData.find(fd=>fd.id===productId);
//    console.log(product)
    
    return (
        <div>
            <h1>{productId} your product details</h1>
            <Product showAddCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;