import React from 'react'
import { HamburgerMenuProps } from '@/components/HamburgerMenu'

// icons
import GitHubIcon from '@/icons/github.svg'
import LinkedInIcon from '@/icons/linkedin.svg'
import InstagramIcon from '@/icons/instagram.svg'

function Footer({ navItems }: HamburgerMenuProps) {
  return (
    <footer className='bg-dark pb-12 pt-24'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3'>
            <h2 className='text-4xl font-bold text-white'>WPU</h2>
            <h3 className='mb-2 text-2xl font-bold'>Hubingi Kami</h3>
            <p>aprianfirlanda@gmail.com</p>
            <p>Derwati</p>
            <p>Bandung</p>
          </div>
          <div className='mb-12 w-full px-4 md:w-1/3'>
            <h3 className='mb-5 text-xl font-semibold text-white'>
              Kategori Tulisan
            </h3>
            <ul className='text-slate-300'>
              <li>
                <a
                  href='#'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Programming
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Teknologi
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Gaya Hidup
                </a>
              </li>
            </ul>
          </div>
          <div className='mb-12 w-full px-4 md:w-1/3'>
            <h3 className='mb-5 text-xl font-semibold text-white'>Tautan</h3>
            <ul className='text-slate-300'>
              {navItems.map(({ link, name }) => (
                <li key={link}>
                  <a
                    href={link}
                    className='mb-3 inline-block text-base hover:text-primary'
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full border-t border-slate-700 pt-10'>
          <div className='mb-5 flex items-center justify-center'>
            <a
              href='https://github.com/aprianfirlanda'
              target='_blank'
              className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-secondary hover:border-primary hover:bg-primary hover:text-white'
            >
              <GitHubIcon className='w-5 fill-current' />
            </a>
            <a
              href='https://www.linkedin.com/in/aprian-firlanda-imani-108852130/'
              target='_blank'
              className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-secondary hover:border-primary hover:bg-primary hover:text-white'
            >
              <LinkedInIcon className='w-5 fill-current' />
            </a>
            <a
              href='https://www.instagram.com/virlandd/'
              target='_blank'
              className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-secondary hover:border-primary hover:bg-primary hover:text-white'
            >
              <InstagramIcon className='w-5 fill-current' />
            </a>
          </div>
          <p className='text-center text-xs font-medium text-slate-500'>
            Dibuat oleh{' '}
            <a
              href='https://www.instagram.com/virlandd/'
              target='_blank'
              className='font-bold text-primary opacity-100 hover:opacity-80'
            >
              Aprian Firlanda Imani
            </a>
            , menggunakan{' '}
            <a
              href='https://nextjs.org'
              target='_blank'
              className='font-bold text-sky-500 opacity-100 hover:opacity-80'
            >
              Next.js
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
