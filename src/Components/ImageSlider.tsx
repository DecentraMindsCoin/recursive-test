import React from 'react'
import Image from 'next/image'
import { PropType } from '../types'
// import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'



const ImageSlider = ({ todoItems }: PropType) => {

  const SliderImages = todoItems[0].image[0].url
  return (
    <>
      <div className="relative h-full w-full max-w-5xl bg-black opacity-50">
        <Image
          priority
          src={SliderImages}
          alt=""
          layout="fill"
          className="absolute  mx-auto object-cover"
        />
      </div>
    </>
  )
}

export default ImageSlider
