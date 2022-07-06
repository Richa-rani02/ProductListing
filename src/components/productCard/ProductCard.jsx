import React from 'react';
import "./ProductCard.css";
import {useNavigate} from "react-router-dom";
export const ProductCard = ({product}) => {
  let navigate=useNavigate();
  const clickHandler=()=>{
    navigate(`/product/${product.id}`);
  }
  return (
    <article className='product' onClick={clickHandler}>
      <img src={product.image} className='product-img'></img>
      <div className='product-details'>
      <p className='title'>{product.title}</p>
      <strong>Rs.{product.price}</strong>
      </div>
     
    </article>
  )
}
