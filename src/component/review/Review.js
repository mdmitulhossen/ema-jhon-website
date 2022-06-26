import React, { useEffect, useState } from 'react';
import fakeData from "../../fakeData/products.json"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
import happyImg from '../../images/giphy.gif';

const review = () => {
    
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const[cart,setcart] = useState([]);
// eslint-disable-next-line react-hooks/rules-of-hooks
const [placeOrder,setplaceOrder]= useState(false);

  const handlePlaceOrder =()=>{

    setcart([]);
    setplaceOrder(true);
    deleteShoppingCart();
    localStorage.setItem('shopping-cart', JSON.stringify({}));
    
 }

 const handleRemovProduct=(productId)=>{
    // console.log("remove",productId);
    const newCart=cart.filter(pd=>pd.id !==productId);
    setcart(newCart);
    removeFromDb(productId);
 };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
          const saveCart =JSON.parse(localStorage.getItem("shopping-cart"));
          
           const productKey = Object.keys(saveCart);
        //   saveCart.map((pd)=>console.log(pd))
          // eslint-disable-next-line no-undef
          const cartProduct = productKey.map(key=>{
            const product= fakeData.find(pd=>pd.id===key);
            product.quantity=saveCart[key];

            return product;
          })
        //   console.log(cartProduct);
        setcart(cartProduct);
  },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(pd=><ReviewItem product={pd} key={pd.id} removeProduct={handleRemovProduct}></ReviewItem>)
                }
                {
                  placeOrder && <img src={happyImg} alt="" />
                }
            </div>
            
            <div className='cart-container'>
                <Cart cart={cart}>
                <Link to="/review"><button onClick={handlePlaceOrder}     className='main-btn'>Place Order</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default review;