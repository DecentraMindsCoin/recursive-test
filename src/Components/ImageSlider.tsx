import React from 'react'
import Image from 'next/image'
import { PropType } from '../types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import { allImages } from '../todos'

//This component is the fullscreen background GIF/image.
const ImageSlider = () => {
  return (
    <>
      <div className="relative h-full w-full   bg-black opacity-50">
        <Image
          priority
          src={allImages[4].url}
          alt={allImages[2].alt}
          layout="fill"
          className="absolute mx-auto object-cover"
        />
      </div>
    </>
  )
}

export default ImageSlider
