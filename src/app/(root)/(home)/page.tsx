import Image from 'next/image'
import Header from '@/components/Header'
import { navItems, skills } from '@/constants'
import Footer from '@/components/Footer'
import SidebarSocialMedia from '@/components/SidebarSocialMedia'

// icons
import WhatsAppIcon from '@/icons/whatsapp.svg'
import CardSkill from '@/components/CardSkill'
import Link from 'next/link'

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
                <span className='block text-4xl font-bold text-dark lg:text-5xl'>
                  Aprian Firlanda Imani
                </span>
              </h1>
              <h2 className='mb-5 text-lg font-medium text-secondary'>
                Full Stack Web Developer
              </h2>
              <p className='mb-10 font-medium text-secondary'>
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
                <WhatsAppIcon className='inline-block w-5 fill-current' />{' '}
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

      <section id='portfolio' className='pb-24 pt-14'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-16 max-w-xl text-center'>
              <h4 className='mb-2 text-lg font-semibold text-primary'>
                Portfolio
              </h4>
              <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-5xl'>
                Projects as a Freelancer
              </h2>
            </div>
          </div>
          <div className='flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12'>
            <div className='mb-12 p-4 md:w-1/2'>
              <Link href='https://www.kacasooca.com/'>
                <div className='flex overflow-hidden rounded-md shadow-md'>
                  <Image
                    src='/images/projects/kacasooca.png'
                    alt='project1'
                    width={16 * 30}
                    height={9 * 30}
                    className='w-full'
                  />
                </div>
                <h3 className='mb-3 mt-5 text-xl font-semibold text-dark '>
                  Kacasooca
                </h3>
                <p className='text-base font-medium text-secondary'>
                  A catalog website for eyeglasses featuring frames and lenses
                  originating from Garut, West Java, Indonesia.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='blog' className='bg-slate-100 pb-32 pt-36'>
        <div className='container'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-16 max-w-xl text-center'>
              <h4 className='mb-2 text-lg font-semibold text-primary'>Blog</h4>
              <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-5xl'>
                Tulisan Terbaru
              </h2>
              <p className='text-base font-medium text-secondary md:text-lg'>
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
                      className='mb-3 block truncate text-xl font-semibold text-dark hover:text-primary'
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
                      className='mb-3 block truncate text-xl font-semibold text-dark hover:text-primary'
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
                      className='mb-3 block truncate text-xl font-semibold text-dark hover:text-primary'
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

      <Footer />
    </>
  )
}
