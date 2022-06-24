import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/shop/Shop';
import Review from './component/review/Review';
import Inventory from './component/inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import { Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div>
        <Header></Header>
        
        
       
        <Routes>
             <Route exact path='/' element={<Shop/>}/>
             <Route exact path='/shop' element={<Shop/>}/>
             <Route exact path='/review' element={<Review/>}/>
             <Route exact path='/inventory' element={<Inventory/>}/>
             <Route  path='*' element={<NotFound/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
