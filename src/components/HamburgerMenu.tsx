import React from 'react'

export interface HamburgerMenuProps {
  navItems: {
    link: string
    name: string
  }[]
}

function HamburgerMenu({ navItems }: HamburgerMenuProps) {
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
          {navItems.map(({ link, name }) => (
            <li key={link} className='group'>
              <a
                href={link}
                className='mx-8 flex py-2 text-base text-dark group-hover:text-primary'
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerMenu
