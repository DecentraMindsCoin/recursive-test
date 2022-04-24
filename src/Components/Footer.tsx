import Image from 'next/image'
import React from 'react'
import { allImages } from '../todos'
const Footer = () => {
  const styles = {
    wrapper:
      'relative mt-56 h-full  rounded-t-2xl border-4 border-teal-300 bg-black  text-center uppercase text-white',
    icon__container: 'relative mx-auto h-40 w-full rounded-xl',
    footer__icon: 'absolute object-cover rounded-xl shadow-lg shadow-cyan-300',
    explore__header:
      'w-full rounded-xl bg-awesome-image-2 py-10 pb-10 text-3xl font-extrabold text-black md:text-4xl',
  }

  return (
    <div className={styles.wrapper}>
      {' '}
      <h1 className={styles.explore__header}>Explore Things To Do!</h1>
      <main className="flex justify-between pt-32">
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
      </main>
    </div>
  )
}

export default Footer
