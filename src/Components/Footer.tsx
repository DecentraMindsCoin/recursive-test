import Image from 'next/image'
import React from 'react'
import { allImages } from '../todos'
const Footer = () => {
  const styles = {
    footer__icon: 'absolute object-cover rounded-xl shadow-lg shadow-cyan-300',
    icon__container: 'relative mx-auto h-40 w-full rounded-xl',
  }

  return (
    <div className="mt-56 relative h-full  rounded-t-2xl border-4 border-teal-300 bg-black  text-center uppercase text-white">
      {' '}
      <h1 className="w-full py-10 pb-10 text-3xl md:text-4xl bg-awesome-image-2 text-black font-extrabold rounded-xl">
        Explore Things To Do!
      </h1>
      <div className="flex justify-between pt-32">
        <div className="grid-row-4 absolute grid h-1/2 w-full space-y-5 px-10">
          <div className={styles.icon__container}>
            <Image
              src={allImages[7].url}
              alt={allImages[7].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-95`}
            />
          </div>
          <div className={styles.icon__container}>
            <Image
              src={allImages[1].url}
              alt={allImages[1].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-90`}
            />
          </div>
          <div className={styles.icon__container}>
            <Image
              src={allImages[2].url}
              alt={allImages[2].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-75`}
            />
          </div>
          <div className={styles.icon__container}>
            <Image
              src={allImages[3].url}
              alt={allImages[3].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-50`}
            />
          </div>
          <div className={`${styles.icon__container} w-1/2`}>
            <Image
              src={allImages[4].url}
              alt={allImages[4].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-50`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
