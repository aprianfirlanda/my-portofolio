import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";

function Footer() {
    return (
        <footer className='bg-neutral pb-12'>
            <div className='container'>
                <div className='w-full border-t border-slate-700 pt-10'>
                    <div className='mb-5 flex items-center justify-center'>
                        <a
                            href='https://github.com/aprianfirlanda'
                            target='_blank'
                            className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-neutral-content hover:border-primary hover:bg-primary hover:text-white'
                        >
                            <FaGithub className='size-5'/>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/aprian-firlanda-imani-108852130/'
                            target='_blank'
                            className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-neutral-content hover:border-primary hover:bg-primary hover:text-white'
                        >
                            <FaLinkedin className='size-5'/>
                        </a>
                        <a
                            href='https://www.instagram.com/virlandd/'
                            target='_blank'
                            className='mr-3 flex size-9 items-center justify-center rounded-full border border-slate-300 text-neutral-content hover:border-primary hover:bg-primary hover:text-white'
                        >
                            <FaInstagram className='size-5'/>
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
    );
}

export default Footer;
