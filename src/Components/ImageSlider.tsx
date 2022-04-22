import React from 'react'
import Image from 'next/image'

const ImageSlider = ({ bgImage }: { bgImage: string }) => {
  return (
    <>
      <div className="relative h-full w-full max-w-5xl bg-black opacity-50">
        <Image
          priority
          src={bgImage.url}
          alt=""
          layout="fill"
          className="absolute  mx-auto object-cover"
        />
      </div>
    </>
  )
}

export default ImageSlider
