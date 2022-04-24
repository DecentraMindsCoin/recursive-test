import React from 'react'
import Image from 'next/image'
import { PropType } from '../types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
const allImages = [
  {name: 'img1', url: 'https://media.graphcms.com/hwLFpMCqSguTMDdP4aHN' , alt: ''}, {name: 'img2', url: 'https://media.graphcms.com/tonKbz0PQye1uaeh8cfm', alt: ''}
]

//This component is the fullscreen background GIF/image.
const ImageSlider = ({ todoItems }: PropType) => {

  const SliderImages = todoItems[0].image[1].url
  return (
    <>
    
      <div className="relative h-full w-full   bg-black opacity-50">
        <Image
          priority
          src={allImages[0].url}
          alt=""
          layout="fill"
          className="absolute mx-auto object-cover"
        />
      </div>
    </>
  )
}

export default ImageSlider
