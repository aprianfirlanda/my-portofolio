import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";

function SidebarSocialMedia() {
    return (
        <div className='fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-lg bg-primary'>
            <div className='flex flex-col p-1'>
                <a
                    href='https://github.com/aprianfirlanda'
                    target='_blank'
                    className='flex size-9 items-center justify-center rounded-full text-white hover:bg-white hover:text-primary'
                >
                    <FaGithub className='w-5 fill-current' />
                </a>
                <a
                    href='https://www.linkedin.com/in/aprian-firlanda-imani-108852130/'
                    target='_blank'
                    className='flex size-9 items-center justify-center rounded-full text-white hover:bg-white hover:text-primary'
                >
                    <FaLinkedin className='w-5 fill-current' />
                </a>
                <a
                    href='https://www.instagram.com/virlandd/'
                    target='_blank'
                    className='flex size-9 items-center justify-center rounded-full text-white hover:bg-white hover:text-primary'
                >
                    <FaInstagram className='w-5 fill-current' />
                </a>
            </div>
        </div>
    )
}

export default SidebarSocialMedia
