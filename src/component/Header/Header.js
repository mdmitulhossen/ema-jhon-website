import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
      return (
            
            <div className="header">
                  <img src={logo} alt="" className='header' />
                  <nav>
                        <Link to="/shop">Shop</Link>
                        <Link to="/review">Order Review</Link>
                        <Link to="/inventory">Manage inventory</Link>
                  </nav>
            </div>
      );
};

export default Header;