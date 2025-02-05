import React from 'react'
import Home from './home/Home';
import Login from './userinfo/Login';
import Register from './userinfo/Register';
import { Route, Routes } from 'react-router-dom';
import RecipeForm from './home/Add_Reciepe/RecipeForm';
import Admin_login from './home/Admin/Admin_login';

const App = () => {
  
  return (
    
   <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/add-recipe" element={<RecipeForm />} />
        <Route exact path="/Admin" element={<Admin_login />} />
       
      </Routes> 
   </div>
  );

  
}


export default App