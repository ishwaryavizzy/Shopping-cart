import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.Period}</h3>
     <div>Rs.{product.price}</div>
      <h3>{product.Services}</h3>
      <div>{product.s1}</div>
      <div>{product.s2}</div>
      <div>{product.s3}</div>
      <div>{product.s4}</div>
    
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
