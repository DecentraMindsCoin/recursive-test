import Image from 'next/image'
import React from 'react'
import { allImages } from '../todos'
import SubButton from './SubForm/SubButton'
const Footer = () => {
  // Footer Inline Tailwind Removed
  const styles = {
    wrapper:
      'relative mt-56 h-full   rounded-t-2xl border-4 border-teal-300 border-b-transparent bg-black  text-center uppercase text-white max-w-5xl mx-auto',
    icon__container:
      'relative mx-auto h-40 w-full rounded-xl hover:scale-105 cursor-pointer',
    footer__icon:
      'absolute object-cover rounded-xl shadow-lg shadow-cyan-300 hover:shadow-fuchsia-300 ',
    explore__header:
      'w-full rounded-xl bg-awesome-image-2 py-10 pb-10 text-3xl font-extrabold text-black md:text-4xl',
    flex__row: 'flex justify-between pt-32',

    grid__rows: 'grid-row-4 absolute grid h-1/2 w-full space-y-5 px-10 ',
    button:
      'relative hover:scale-105 w-full text-center font-extrabold absolute  py-2 text-white rounded-full border-4 border-violet-400 shadow-lg shadow-cyan-300 hover:shadow-fuchsia-300 hover:bg-awesome-image-2',
    button__text: 'font-semibold tracking-widest text-white hover:text-black',
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.explore__header}>Explore Things To Do!</h1>
      <div className={styles.flex__row}>
        <div className={styles.grid__rows}>
          <div className={styles.icon__container}>
            <Image
              src={allImages[7].url}
              alt={allImages[7].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-95`}
            />
            <SubButton />
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
          </div>{' '}
          <div className={styles.button}>
            <button className="w-full text-center">
              <p className={styles.button__text}>Explore more</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
