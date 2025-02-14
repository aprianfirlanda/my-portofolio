import Image from 'next/image'
import Header from '@/components/Header'
import { navItems, skills } from '@/constants'
import Footer from '@/components/Footer'
import SidebarSocialMedia from '@/components/SidebarSocialMedia'
import CardSkill from '@/components/CardSkill'
import Link from 'next/link'
import CardBlog from '@/components/CardBlog'
import {FaWhatsapp} from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <SidebarSocialMedia />

            <Header navItems={navItems} />

            <section id='home' className='pt-24 lg:h-screen lg:pt-36'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full self-center px-4 lg:w-1/2'>
                            <h1 className='text-base font-semibold text-primary md:text-xl'>
                                Hi, I am
                                <span className='block text-4xl font-bold lg:text-5xl'>
                                  Aprian Firlanda Imani
                                </span>
                            </h1>
                            <h2 className='mb-5 text-lg font-medium'>
                                Full Stack Web Developer
                            </h2>
                            <p className='mb-10 font-medium'>
                                I have over 4 years of experience as a web developer, creating
                                robust and scalable web applications. Skilled in both front-end
                                and back-end development, I ensure seamless functionality.
                                Proficient in various languages and frameworks, I thrive in
                                collaborative environments.
                            </p>
                            <a
                                href='https://api.whatsapp.com/send/?phone=%2B6282253600917&text&type=phone_number&app_absent=0'
                                className='rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg'
                            >
                                <FaWhatsapp className='inline-block size-5' />{' '}
                                Contact Me
                            </a>
                        </div>
                        <div className='w-full self-end px-4 lg:w-1/2'>
                            <div className='relative mt-10 lg:right-0 lg:mt-9'>
                                <Image
                                    width='499'
                                    height='499'
                                    src='/images/profile-pic.png'
                                    alt='Profile Picture'
                                    className='mx-auto max-w-full'
                                />
                                <Image
                                    src='/images/profile-pic-background.svg'
                                    alt='WhatsApp'
                                    className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2'
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='skills' className='bg-slate-100 pb-24 pt-14'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='mb-10 w-full px-4'>
                            <h1 className='mb-3 text-center text-lg font-bold uppercase text-primary'>
                                Skills
                            </h1>
                            <h2 className='mb-5 text-center text-3xl font-bold lg:text-4xl'>
                                Stack of Technologies
                            </h2>
                            <ul>
                                {skills.map(({ id, name, data }) => (
                                    <li key={id}>
                                        <h3 className='pb-5 pt-10 text-lg font-semibold'>{name}</h3>
                                        <div className='lg: grid grid-cols-2 gap-2 lg:grid-cols-5'>
                                            {data.map(({ imgSrc, title }) => (
                                                <div key={imgSrc} className='w-full'>
                                                    <CardSkill imgSrc={imgSrc} title={title} />
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id='work-experience' className='pb-24 pt-14'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='mb-5 w-full px-4'>
                            <h1 className='mb-3 text-center text-lg font-bold uppercase text-primary'>
                                Work Experience
                            </h1>
                        </div>
                        <div className='mb-2 w-full px-4'>
                            <div className='flex items-center'>
                                <Image
                                    src='/images/works/tdi.jpeg'
                                    alt='Logo TDI'
                                    width={75}
                                    height={75}
                                    className='mr-3'
                                />
                                <div className='flex flex-wrap'>
                                    <h2 className='w-full text-xl font-bold'>
                                        PT Tabel Data Informatika
                                    </h2>
                                    <p className='w-full text-sm font-semibold text-slate-500'>
                                        6 February 2020 - Now
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full px-4'>
                            <p className='text-justify text-slate-700'>
                                As a Full Stack Developer, I was responsible for designing,
                                developing, and maintaining both front-end and back-end
                                components of web applications. My key responsibilities
                                included:
                            </p>
                            <ul className='list-outside list-disc pl-4 pt-2'>
                                <li>Design and ship new features</li>
                                <li>Writing clean, maintainable, and efficient code</li>
                                <li>
                                    Building and consuming RESTful APIs to integrate various
                                    services and systems
                                </li>
                                <li>Implementing responsive web design</li>
                                <li>Debugging and troubleshooting issues</li>
                                <li>
                                    Code reviews to maintain high-quality standards and improve
                                    codebase
                                </li>
                                <li>
                                    Continuously learning and adopting new technologies and best
                                    practices
                                </li>
                            </ul>
                            <p className='pt-2 text-justify text-slate-700'>
                                the web applications that have been worked on during my work,
                                namely:
                            </p>
                            <ul className='list-outside list-disc pl-4 pt-2'>
                                <li>SIAP BOS DKI Jakarta</li>
                                <li>SiHalal - BPJPH</li>
                                <li>Sistem Informasi Keuangan Daerah DKI Jakarta</li>
                                <li>Rencana Bisnis Anggaran Badan Layanan Umum DKI Jakarta</li>
                                <li>Dana Pensiun Bank Indonesia (Akunting)</li>
                                <li>Hasjrat Sales Assistant</li>
                                <li>Sistem Informasi Satuan Polisi Pamong Praja DKI Jakarta</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id='portfolio' className='bg-slate-100 pb-24 pt-14'>
                <div className='container'>
                    <div className='w-full px-4'>
                        <div className='mx-auto mb-16 max-w-xl text-center'>
                            <h4 className='mb-2 text-lg font-semibold text-primary'>
                                Portfolio
                            </h4>
                            <h2 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
                                Projects as a Freelancer
                            </h2>
                        </div>
                    </div>
                    <div className='flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12'>
                        <div className='group mb-12 rounded-lg p-4 hover:bg-white hover:opacity-90 md:w-1/2'>
                            <Link href='https://www.kacasooca.com/' target='_blank'>
                                <div className='flex overflow-hidden rounded-md shadow-md'>
                                    <Image
                                        src='/images/projects/kacasooca.png'
                                        alt='project1'
                                        width={16 * 30}
                                        height={9 * 30}
                                        className='w-full'
                                    />
                                </div>
                                <h3 className='mb-3 mt-5 text-xl font-semibold group-hover:text-primary'>
                                    Kacasooca
                                </h3>
                                <p className='text-base font-medium'>
                                    A catalog website for eyeglasses featuring frames and lenses
                                    originating from Garut, West Java, Indonesia.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CardBlog/>

            <Footer />
        </>
    )
}
