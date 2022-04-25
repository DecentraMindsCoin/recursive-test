import Image from 'next/image'
import React from 'react'
import { allImages } from '../todos'
import SubButton from './SubForm/SubButton'
const Footer = () => {
  // Footer Inline Tailwind Removed
  const styles = {
    wrapper:
      'relative mt-56 h-full  rounded-t-2xl border-4 border-teal-300 border-b-transparent  black  text-center uppercase text-white max-w-5xl mx-auto',
    explore__header:
      'w-full rounded-xl bg-awesome-image-2 py-10 pb-10 text-3xl font-extrabold text-black md:text-4xl',
    p__wrapper: ' text-3xl px-5 pt-20 w-full text-center font-extrabold uppercase',
    p__span: "cursor-pointer  italic text-teal-300 hover:underline",
    icon__container:
      'relative mx-auto h-40 w-full rounded-xl hover:scale-105 cursor-pointer',
    footer__icon:
      'absolute object-cover rounded-xl hover:rounded-full hover:opacity-10 shadow-lg shadow-cyan-300 hover:shadow-fuchsia-300 ',

    flex__row: 'flex justify-between pt-32',

    grid__rows: 'grid-row-4 grid h-1/2 w-full space-y-5 px-10 relative',
    button:
      'py-2 text-white rounded-full border-4 border-violet-400 shadow-lg shadow-cyan-300 hover:shadow-fuchsia-300 hover:bg-awesome-image-2 hover:scale-105 transition transform ease-in-out duration-500  w-full text-center font-extrabold  bottom-10 relative  ',
    button__text: 'font-semibold tracking-widest text-white hover:text-black',
    play__button:
      'hover:scale-105 hover:bg-awesome-image-2 relative mx-auto h-32 w-96 rounded-full mt-20  border-white border-2 ',
    play__image: 'absolute top-0 object-cover rounded-full ',
    hidden__text: 'px-8 pt-16 font-bold uppercase italic tracking-wide',
    explore__button: 'w-full text-center font-extrabold uppercase',
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.explore__header}>Explore Things To Do!</h1>{' '}
      <p className={styles.p__wrapper}>
        <span className={styles.p__span}>
          {' '}
          To do{' '}
        </span>
        or{' '}
        <span className="cursor-pointer italic text-teal-300 hover:underline">
          {' '}
          not to do
        </span>
        , that is the question...
      </p>
      <p className=" px-5 text-3xl tracking-widest text-white md:text-4xl">
        <span className="cursor-pointer text-base italic text-gray-300 hover:underline">
          Hover to discover...
        </span>
      </p>
      <div>
        <button className={styles.play__button}>
          <Image
            src="https://media.graphassets.com/yOjE77mYQD2yX5sAGgPx"
            width="200"
            height="100"
            alt=""
            className={styles.play__image}
          />
        </button>
      </div>
      <div className={styles.flex__row}>
        <div className={styles.grid__rows}>
          <div className={styles.icon__container}>
            <Image
              src={allImages[7].url}
              alt={allImages[7].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-95`}
            />
            <p className={styles.hidden__text}>"Do Something Adventerous!"</p>
          </div>{' '}
          <SubButton />
          <div className={styles.icon__container}>
            <Image
              src={allImages[1].url}
              alt={allImages[1].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-90`}
            />
            <p className={styles.hidden__text}>
              "Do Something Nice For Someone Else!"
            </p>
          </div>
          <SubButton />
          <div className={styles.icon__container}>
            <Image
              src={allImages[2].url}
              alt={allImages[2].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-75`}
            />
            <p className={`${styles.hidden__text} px-12`}>"Do More With Your Family!"</p>
          </div>
          <SubButton />
          <div className={styles.icon__container}>
            <Image
              src={allImages[3].url}
              alt={allImages[3].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-50`}
            />
            <p className={styles.hidden__text}>"Do More!"</p>
          </div>
          <SubButton />
          <div className={`${styles.icon__container} w-1/2`}>
            <Image
              src={allImages[4].url}
              alt={allImages[4].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-50`}
            />
            <p className={styles.hidden__text}>"Do!"</p>
          </div>
          <SubButton />
          <div className={styles.button}>
            <button className={styles.explore__button}>
              <p className={styles.button__text}>Explore More To Do!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
