import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd)=> total+prd.price ,0);
    //use for loop

    let shipping = 0;
    if(totalPrice>300){
        shipping=0;
    }
    else if(totalPrice>0) {
        shipping=10.99;
    }
    
    const tax =Math.round(totalPrice/10) ;
    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Order: {cart.length}</p>
            <p>Product Price : {totalPrice}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total Price: {totalPrice + shipping+tax}</p>
        </div>
    );
};

export default Cart;