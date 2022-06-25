import React from 'react';

const ReviewItem = (props) => {
    const{name,quantity,id,price}=props.product;
    const style= {
            borderBottom:"1px solid lightgray",
            marginBotton:"5px",
            paddingBottom:'5px',
            marginLeft:'200px'
    };
    return (
        <div>
            <div style={style} className='product-item'>
                <h4 className='product-name'>{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>${price}</small></p>
                <br />
                <button className='main-btn' onClick={()=>props.removeProduct(id)}>Remove Item</button>
            </div>
            
        </div>
    );
};

export default ReviewItem;