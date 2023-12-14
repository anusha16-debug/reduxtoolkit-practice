import React, {useState, useEffect} from 'react'
import Card from './Card'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'


const Products = () => {
    const dispatch = useDispatch()
     const {data : products, status} = useSelector(state => state.product)
     
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleAddToCart = (product) => {
        console.log(product)
        dispatch(addToCart(product))
    }

    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const data = await res.json()
    //     console.log(data)
    //     setProducts(data)
    //   }
  
    if(status === STATUSES.LOADING){
      return <h1 style={{textAlign:'center', margin:'0 auto'}}> loading ...</h1>
    }
  return (
    <div className='productsWrapper'>
      
        {
            products.map(product => (
              <Card cardProp = {product} onAddToCart={handleAddToCart} key={product.id}/>
            ))
        }
    </div>
  )
}

export default Products