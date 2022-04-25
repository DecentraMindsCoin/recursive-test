import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { allImages } from '../todos'
import SubButton from './SubForm/SubButton'
const Footer = () => {
  // Footer Inline Tailwind Removed
  const styles = {
    wrapper:
      'relative mt-40 h-full rounded-t-2xl border-4 border-teal-300 border-b-transparent  text-center uppercase text-white max-w-5xl flex-1 mx-auto',
    explore__header:
      'w-full rounded-xl bg-awesome-image-3 hover:bg-image-3 py-10 pb-10 text-3xl font-extrabold text-black cursor-pointer  hover:text-white md:text-4xl ',
    p__wrapper:
      'text-left text-xl sm:text-3xl px-7 pt-20 w-full  font-extrabold uppercase',
    p__span:
      ' cursor-pointer  italic text-teal-300 hover:underline shadow-xl hover:shadow-teal-300',
    icon__container:
      'relative mx-auto h-40 w-full rounded-xl hover:scale-105 cursor-pointer',
    footer__icon:
      'absolute object-cover rounded-xl hover:rounded-full hover:opacity-10 shadow-lg shadow-cyan-300 hover:shadow-fuchsia-300 ',

    flex__row: 'flex justify-between pt-24',

    grid__rows: 'grid-row-4 grid h-1/2 w-full space-y-5 relative py-24',
    button:
      'py-2  max-w-xs mx-auto text-white hover:text-black rounded-full border-4 border-violet-400 shadow-lg shadow-cyan-300 hover:shadow-fuchsia-300 hover:bg-awesome-image-2 hover:scale-105 transition transform ease-in-out duration-500  w-full text-center font-extrabold  relative ',
    button__text: 'font-semibold tracking-widest  hover:text-black',
    play__button:
      'hover:scale-105 hover:bg-awesome-image-2 relative mx-auto flex-1 rounded-full mt-20  border-teal-300 hover:border-violet-400 border-8 shadow-lg shadow-teal-400 hover:shadow-fuchsia-300',
    play__image: 'absolute top-0 object-cover rounded-full hover:opacity-50 ',
    hidden__text:
      'px-8 pt-16 font-bold font-sans uppercase italic tracking-wide',
    explore__button: '  w-full text-center font-extrabold font-sans uppercase ',
    p__second__span: 'cursor-pointer italic text-teal-300 hover:underline',
    discover__text:
      'px-5 pt-10 text-3xl tracking-widest text-white md:text-4xl',
    discover__span:
      'font-sans cursor-pointer  text-base italic text-gray-300 hover:underline',
  }
  // Used Footer.js Tailwind styling to show removed Tailwind as own variable using style.{name} for possibly cleaner code?
  return (
    <div className={styles.wrapper}>
      <div className=''>

   
      <h1 className={styles.explore__header}>Explore Things To Do!</h1>
      <p className={styles.p__wrapper}>
        <span className={styles.p__span}> To do </span>
        or <span className={styles.p__second__span}> not to do</span>, that is
        the question...Don't overcomplicate it, just start by doing the{' '}
        <span className="text-teal-400">things</span> that make you happy.
      </p>

      <div>
        <button className={styles.play__button}>
          <Image
            src="https://media.graphassets.com/yOjE77mYQD2yX5sAGgPx"
            width="200"
            height="100"
            alt="glitchy play button gif image"
            className={styles.play__image}
          />
        </button>
      </div>
      <p className={styles.discover__text}>
        <span className={styles.discover__span}>Hover to discover...</span>
      </p>
      <div className={styles.flex__row}>
        <div className={styles.grid__rows}>
          <div className={styles.icon__container}>
            <Image
              src={allImages[0].url}
              alt={allImages[0].alt}
              layout="fill"
              className={`${styles.footer__icon} scale-95`}
            />
            <p className={styles.hidden__text}>"Do Something Adventerous!"</p>
          </div>{' '}
          <br />
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
            <p className={`${styles.hidden__text} px-12`}>
              "Do More With Your Family!"
            </p>
          </div>
          <br />
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
          <br />
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
          <br />
          <SubButton />
          <div className={styles.button}>
            {' '}
            <button className={styles.explore__button}>
              <Link href="/todo">
                <a>
                  <p className={styles.button__text}>Explore More To Do!</p>
                </a>
              </Link>{' '}
            </button>
          </div>
        </div>
      </div>
    </div>   </div>
  )
}

export default Footer
