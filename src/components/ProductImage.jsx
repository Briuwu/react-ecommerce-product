import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconClose from '../images/icon-close.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

const ProductImage = props => {
  const [activeThumb, setActiveThumb] = useState()

  return (
    <div className='container-product'>
      <div className='product-images'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className='product-images-slider'
        >
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img onClick={props.handleLightbox} src={item} alt="Slider Images" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className='product-images-slider-thumbs'
        >
          {props.thumbs.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='product-images-slider-thumbs-wrapper'>
                <img src={item} alt="Slider Images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired
}

export default ProductImage