import React from 'react';
import "./ProductCard.css";
export const ProductCard = ({product}) => {
  return (
    <article className='product'>
      <img src={product.image} className='product-img'></img>
      <div className='product-details'>
      <p className='title'>{product.title}</p>
      <strong>Rs.{product.price}</strong>
      </div>
     
    </article>
  )
}
