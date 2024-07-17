import React from 'react'

// icons
import GitHubIcon from '@/icons/github.svg'
import LinkedInIcon from '@/icons/linkedin.svg'
import InstagramIcon from '@/icons/instagram.svg'

function Footer() {
  return (
    <footer className='bg-dark pb-12'>
      <div className='container'>
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
