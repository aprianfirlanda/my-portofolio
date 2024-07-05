'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')

      if (header !== null) {
        if (window.scrollY > 0) {
          header.classList.add('navbar-fixed')
        } else {
          header.classList.remove('navbar-fixed')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleHamburger = () => {
    const hamburger = document.querySelector('#hamburger')
    const navMenu = document.querySelector('#nav-menu')

    if (hamburger !== null) {
      hamburger.classList.toggle('hamburger-active')
    }
    if (navMenu !== null) {
      navMenu.classList.toggle('hidden')
    }
  }

  return (
    <>
      <header className='absolute left-0 top-0 z-10 flex w-full items-center bg-transparent'>
        <div className='container'>
          <div className='relative flex items-center justify-between'>
            <div className='px-4'>
              <a
                href='#home'
                className='block py-6 text-lg font-bold text-transparent'
              >
                <span className='bg-gradient-to-r from-teal-400 to-blue-300 bg-clip-text'>
                  Aprian Firlanda
                </span>
              </a>
            </div>
            <div className='flex items-center px-4'>
              <button
                id='hamburger'
                name='hamburger'
                type='button'
                className='absolute right-4 block lg:hidden'
                onClick={toggleHamburger}
              >
                <span className='hamburger-line origin-top-left'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line origin-bottom-left'></span>
              </button>
              <nav
                id='nav-menu'
                className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none'
              >
                <ul className='block lg:flex'>
                  <li className='group'>
                    <a
                      href='#home'
                      className='text-dark mx-8 flex py-2 text-base group-hover:text-primary'
                    >
                      Beranda
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='#about'
                      className='text-dark mx-8 flex py-2 text-base group-hover:text-primary'
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='#portfolio'
                      className='text-dark mx-8 flex py-2 text-base group-hover:text-primary'
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='#clients'
                      className='text-dark mx-8 flex py-2 text-base group-hover:text-primary'
                    >
                      Clients
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='#blog'
                      className='text-dark mx-8 flex py-2 text-base group-hover:text-primary'
                    >
                      Blog
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='#contact'
                      className='text-dark mx-8 flex py-2 text-base group-hover:text-primary'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section id='home' className='pt-36'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
              <h1 className='text-base font-semibold text-primary md:text-xl'>
                Hi, I am
                <span className='text-dark block text-4xl font-bold lg:text-5xl'>
                  Aprian Firlanda Imani
                </span>
              </h1>
              <h2 className='mb-5 text-lg font-medium text-secondary'>
                Full Stack Web Developer
              </h2>
              <p className='mb-10 font-medium text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam deleniti, facere laudantium perspiciatis quia rerum!
              </p>
              <a
                href='#'
                className='rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg'
              >
                Contact Me
              </a>
            </div>
            <div className='w-full self-end px-4 lg:w-1/2'>
              <div className='relative mt-10 lg:right-0 lg:mt-9'>
                <Image
                  width='499'
                  height='499'
                  src='/profile-pic.png'
                  alt='Profile Picture'
                  className='mx-auto max-w-full'
                />
                <span className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 md:scale-125'>
                  <svg
                    width='400'
                    height='400'
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#14b8a6'
                      d='M49.9,-77.9C64.7,-68.2,76.7,-54.3,84.3,-38.3C91.9,-22.3,95.3,-4,91.9,12.6C88.5,29.2,78.5,44.3,66.7,57.5C54.8,70.8,41.2,82.2,25.1,88.3C9,94.3,-9.6,95,-26.5,90.1C-43.4,85.2,-58.7,74.7,-69.3,60.9C-79.9,47.2,-85.7,30.2,-88.1,12.8C-90.4,-4.6,-89.1,-22.4,-81.9,-37.1C-74.7,-51.9,-61.6,-63.6,-46.9,-73.3C-32.3,-83.1,-16.1,-90.8,0.7,-92C17.6,-93.1,35.1,-87.6,49.9,-77.9Z'
                      transform='translate(100 100) scale(0.75)'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='pb-32 pt-36'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='mb-10 w-full px-4 lg:w-1/2'>
              <h4 className='mb-3 text-lg font-bold uppercase text-primary'>
                Tentang Saya
              </h4>
              <h2 className='mb-5 max-w-md text-3xl font-bold lg:text-4xl'>
                Yuk belajar web programming di wpu!
              </h2>
              <p className='text-base font-medium text-secondary lg:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci beatae excepturi expedita id omnis suscipit!
              </p>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <h3 className='text-dark mb-4 text-2xl font-semibold lg:pt-10 lg:text-3xl'>
                Mari berteman
              </h3>
              <p className='mb-6 text-base font-medium text-secondary lg:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci beatae excepturi expedita id omnis suscipit!
              </p>
              <div className='flex items-center'>
                <a
                  href='https://github.com/aprianfirlanda'
                  target='_blank'
                  className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-secondary hover:border-primary hover:bg-primary hover:text-white'
                >
                  <svg
                    role='img'
                    width='20'
                    className='fill-current'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>GitHub</title>
                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/in/aprian-firlanda-imani-108852130/'
                  target='_blank'
                  className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-secondary hover:border-primary hover:bg-primary hover:text-white'
                >
                  <svg
                    role='img'
                    width='20'
                    className='fill-current'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>LinkedIn</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
                <a
                  href='https://www.instagram.com/virlandd/'
                  target='_blank'
                  className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-secondary hover:border-primary hover:bg-primary hover:text-white'
                >
                  <svg
                    role='img'
                    width='20'
                    className='fill-current'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Instagram</title>
                    <path d='M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='portfolio' className='bg-slate-100 pb-16 pt-36'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-16 max-w-xl text-center'>
              <h4 className='mb-2 text-lg font-semibold text-primary'>
                Portfolio
              </h4>
              <h2 className='text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
                Project Terbaru
              </h2>
              <p className='text-md font-medium text-secondary md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium cum doloribus earum eius, molestiae molestias nemo
                obcaecati sunt voluptate voluptates!
              </p>
            </div>
          </div>
          <div className='flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12'>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='overflow-hidden rounded-md shadow-md'>
                <Image
                  src='https://source.unsplash.com/random/600x317?sig=1'
                  alt='project1'
                  width='600'
                  height='317'
                  className='w-full'
                />
              </div>
              <h3 className='text-dark mb-3 mt-5 text-xl font-semibold '>
                Landing Page Sandhika Galih
              </h3>
              <p className='text-base font-medium text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                consequuntur debitis dolorem praesentium recusandae voluptates.
              </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='overflow-hidden rounded-md shadow-md'>
                <Image
                  src='https://source.unsplash.com/random/600x317?sig=1'
                  alt='project1'
                  width='600'
                  height='317'
                  className='w-full'
                />
              </div>
              <h3 className='text-dark mb-3 mt-5 text-xl font-semibold '>
                Landing Page Sandhika Galih
              </h3>
              <p className='text-base font-medium text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                consequuntur debitis dolorem praesentium recusandae voluptates.
              </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='overflow-hidden rounded-md shadow-md'>
                <Image
                  src='https://source.unsplash.com/random/600x317?sig=1'
                  alt='project1'
                  width='600'
                  height='317'
                  className='w-full'
                />
              </div>
              <h3 className='text-dark mb-3 mt-5 text-xl font-semibold '>
                Landing Page Sandhika Galih
              </h3>
              <p className='text-base font-medium text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                consequuntur debitis dolorem praesentium recusandae voluptates.
              </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='overflow-hidden rounded-md shadow-md'>
                <Image
                  src='https://source.unsplash.com/random/600x317?sig=1'
                  alt='project1'
                  width='600'
                  height='317'
                  className='w-full'
                />
              </div>
              <h3 className='text-dark mb-3 mt-5 text-xl font-semibold '>
                Landing Page Sandhika Galih
              </h3>
              <p className='text-base font-medium text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                consequuntur debitis dolorem praesentium recusandae voluptates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='clients' className='bg-slate-700 pb-32 pt-36'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-16 text-center'>
              <h4 className='mb-2 text-lg font-semibold text-primary'>
                Clients
              </h4>
              <h2 className='mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl'>
                Yang Pernah BerkerjaSama
              </h2>
              <p className='text-md font-medium text-secondary md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                ipsa rem velit?
              </p>
            </div>
          </div>
          <div className='w-full px-4'>
            <div className='flex flex-wrap items-center justify-center'>
              <a
                href='#'
                className='mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8'
              >
                <Image
                  src='https://source.unsplash.com/random/1600x700?sig=1'
                  alt='Client 1'
                  width='1600'
                  height='700'
                />
              </a>
              <a
                href='#'
                className='mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8'
              >
                <Image
                  src='https://source.unsplash.com/random/1600x700?sig=1'
                  alt='Client 1'
                  width='1600'
                  height='700'
                />
              </a>
              <a
                href='#'
                className='mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8'
              >
                <Image
                  src='https://source.unsplash.com/random/1600x700?sig=1'
                  alt='Client 1'
                  width='1600'
                  height='700'
                />
              </a>
              <a
                href='#'
                className='mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8'
              >
                <Image
                  src='https://source.unsplash.com/random/1600x700?sig=1'
                  alt='Client 1'
                  width='1600'
                  height='700'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='blog/pt-36' className='bg-slate-100 pb-32'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-16 max-w-xl text-center'>
              <h4 className='mb-2 text-lg font-semibold text-primary'>Blog</h4>
              <h2 className='text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
                Tulisan Terbaru
              </h2>
              <p className='text-md font-medium text-secondary md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                excepturi impedit laudantium sapiente.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='mb-10 overflow-hidden rounded-xl bg-white shadow-lg'>
                <Image
                  src='https://source.unsplash.com/random/360x200?programming'
                  alt='Blog 1'
                  width='360'
                  height='200'
                  className='w-full'
                />
                <div className='px-6 py-8'>
                  <h3>
                    <a
                      href='#'
                      className='text-dark mb-3 block truncate text-xl font-semibold hover:text-primary'
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className='mb-6 text-base font-medium text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, quia?
                  </p>
                  <a
                    href='#'
                    className='rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80'
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='mb-10 overflow-hidden rounded-xl bg-white shadow-lg'>
                <Image
                  src='https://source.unsplash.com/random/360x200?programming'
                  alt='Blog 1'
                  width='360'
                  height='200'
                  className='w-full'
                />
                <div className='px-6 py-8'>
                  <h3>
                    <a
                      href='#'
                      className='text-dark mb-3 block truncate text-xl font-semibold hover:text-primary'
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className='mb-6 text-base font-medium text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, quia?
                  </p>
                  <a
                    href='#'
                    className='rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80'
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='mb-10 overflow-hidden rounded-xl bg-white shadow-lg'>
                <Image
                  src='https://source.unsplash.com/random/360x200?programming'
                  alt='Blog 1'
                  width='360'
                  height='200'
                  className='w-full'
                />
                <div className='px-6 py-8'>
                  <h3>
                    <a
                      href='#'
                      className='text-dark mb-3 block truncate text-xl font-semibold hover:text-primary'
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className='mb-6 text-base font-medium text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, quia?
                  </p>
                  <a
                    href='#'
                    className='rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80'
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
