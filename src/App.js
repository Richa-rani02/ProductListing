import React from 'react';
import { Home } from './features/Home/Home';
import {Header,Footer} from "./components/index";
import {SingleProduct} from "./features/singleProduct/SingleProduct";
import {Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        {/* <Route path="/product" element={<SingleProduct/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
