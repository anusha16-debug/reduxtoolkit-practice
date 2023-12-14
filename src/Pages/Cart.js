import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)


    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className='cartWrapper'>
                {
                    cartItems.map((item) => (
                        <div className='cartCard' key={item.id}>
                            <img src={item.image} alt='product' />
                            <h4>{item.title}</h4>
                            <h5>{item.price}</h5>
                            <button className='btn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Cart
