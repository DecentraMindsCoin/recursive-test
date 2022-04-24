import React from 'react'
import Image from 'next/image'
import { PropType } from '../types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
const allImages = [
  {name: 'earth-bridge', url: 'https://media.graphassets.com/9kIBX9b0Q0uWKW7cYALJ', alt: 'retro futuristic gifs'},
  {name: 'triangles', url: 'https://media.graphassets.com/kbyaYAgdQuFde30HJ2wS', alt: 'retro futuristic gifs'},
  {name: 'squares2', url: 'https://media.graphassets.com/1PoPuCpmTUyK5m7GqJAt', alt: 'retro futuristic gifs'},
  {name: 'checker', url: 'https://media.graphassets.com/lTnxRfWSTmG3QEhSyOQ7', alt: 'retro futuristic gifs'},
  {name: 'the-square', url: 'https://media.graphassets.com/DAcVt7iTTpbAYLoMAx6A', alt: 'retro futuristic gifs'},
  {name: 'a-grey', url: 'https://media.graphassets.com/m05cOYPGTNqwFsNSwGHs'},
  {name: 'rubix', url: 'https://media.graphassets.com/FudPH1JSpOIpHGjjydN2'},
  {name: 'tesserect', url: 'https://media.graphassets.com/2HlzQXNuSSWXum71jrtj'},
]

//This component is the fullscreen background GIF/image.
const ImageSlider = ({ todoItems }: PropType) => {

  return (
    <>
    
      <div className="relative h-full w-full   bg-black opacity-50">
        <Image
          priority
          src={allImages[2].url}
          alt={allImages[0].alt}
          layout="fill"
          className="absolute mx-auto object-cover"
        />
      </div>
    </>
  )
}

export default ImageSlider
