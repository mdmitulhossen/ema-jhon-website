import React, { useEffect,useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd=>pd.id===product.id);
        let count=1;
        let newcart;
        if(sameProduct){
            count = sameProduct.quantity +1;
            sameProduct.quantity= count;
            const others= cart.filter(pd=>pd.id!==product.id);
            newcart = [...others,sameProduct]
        }
        else {
            product.quantity = 1;
            newcart = [...cart,product];
            
        }
        
        setCart(newcart);
        // const count = newcart.filter(pd=>pd.id===product.id)
        addToDb(product.id);
    }
    useEffect(()=>{
        const saveCart =JSON.parse(localStorage.getItem("shopping-cart"));
        console.log(saveCart)
         const productKey = Object.keys(saveCart);
      //   saveCart.map((pd)=>console.log(pd))
        // eslint-disable-next-line no-undef
        const cartProduct = productKey.map(key=>{
          const product= fakeData.find(pd=>pd.id===key);
          product.quantity=saveCart[key];

          return product;
        },[])
      //   console.log(cartProduct);
      setCart(cartProduct);
},[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product showAddCart = {true} handleAddProduct = {handleAddProduct} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><button      className='main-btn'>Review Order</button></Link>
                </Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;