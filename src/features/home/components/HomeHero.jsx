import React from 'react';
import { useWorkDuration } from '../../../hooks/useWorkDuration.js';
import hero from '../../../assets/images/hero.png';
import WhatsappIcon from '../../../assets/icons/whatsapp-icon.svg?react';
import { Link } from 'react-router-dom';

function HomeHero() {
  const workYears = useWorkDuration('2020-02-06', { mode: 'rounded' });
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <p className="mt-8 text-lg font-medium text-pretty text-gray-900 sm:text-xl/8">
                  Hi, I am
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Aprian Firlanda Imani
                </h1>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-500 sm:text-3xl">
                  Full Stack Developer
                </h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  I have over {workYears} years of experience as a web developer, creating robust
                  and scalable web applications. Skilled in both front-end and back-end development,
                  I ensure seamless functionality. Proficient in various languages and frameworks, I
                  thrive in collaborative environments.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact me
                    <WhatsappIcon className="inline-block ml-2 size-5 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                />
                <img className="h-[350px]" src={hero} alt="Hero Picture" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}

export default HomeHero;
