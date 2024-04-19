import React from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/DashBoard";
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
//import ProductList from './components/ProductList';
import './App.css'; 
//import Product from './components/Product';
const App = () => {


 

  return (
    <div className='App'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
        </Routes>
      </BrowserRouter>
   
    </div>
  );
};

export default App;
