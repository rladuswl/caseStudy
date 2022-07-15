import React from 'react'
import './style.css';

const Product = ({img}) => {
  return (
    <div class="product">
      <img src={img} />
    </div>
  )
}

export default Product;