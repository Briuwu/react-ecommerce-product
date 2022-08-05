import React from 'react'
import IconCross from '../images/icon-close.svg'
import ProductImage from './ProductImage'
import { productImages, productThumbs } from '../assets'

const Lightbox = ({ children }) => {
  return (
    <div className='lightbox'>
      {children}
    </div>
  )
}

export default Lightbox