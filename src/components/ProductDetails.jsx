import React from 'react'
import IconMinus from '../images/icon-minus.svg'
import IconPlus from '../images/icon-plus.svg'
import IconCart from '../images/icon-cart.svg'

const ProductDetails = ({ count, setCount, handleAddCart }) => {

  const handleCountAdd = () => setCount(prev => prev + 1)
  const handleCountMinus = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }

  return (
    <div className='product-details'>
      <p className='product-details-head'>Sneaker Company</p>
      <p className="product-details-title">Fall Limited Edition <br /> Sneakers</p>
      <p className="product-details-desc">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div className='product-details-price'>
        <p className='product-price'>$125.00</p>
        <p className='product-sale'>50%</p>
        <p className='product-last-price'>$250.00</p>
      </div>
      <div className='product-cart'>
        <div className="product-details-buy">
          <button onClick={handleCountMinus}><img src={IconMinus} alt="" /></button>
          <p>{count}</p>
          <button onClick={handleCountAdd}><img src={IconPlus} alt="" /></button>
        </div>
        <button onClick={handleAddCart} className='product-buy'><span><img src={IconCart} alt="" /></span>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetails