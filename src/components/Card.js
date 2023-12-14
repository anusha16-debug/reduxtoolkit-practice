import React from 'react'

const Card = (props) => {
   const {image, title, price} = props.cardProp
   const handleAddToCart = () => {
    // Call the onAddToCart function with the product ID
    props.onAddToCart(props.cardProp);
  };

  return (
    <div className='card'>
        <img src={image} alt='product'/>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button className='btn' onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default Card
