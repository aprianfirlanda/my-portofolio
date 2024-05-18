import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hi, I am
                <span className="block font-bold text-4xl lg:text-5xl">
                  Aprian Firlanda Imani
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5">Full Stack Web Developer</h2>
              <p className="font-medium text-slate-400 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti, facere laudantium perspiciatis quia rerum!
              </p>
              <a href="#"
                 className="text-base font-semibold bg-primary py-3 px-8 text-slate-600 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image width="499" height="499" src="/profile-pic.png" alt="Profile Picture" className="max-w-full mx-auto"/>
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#14b8a6"
                          d="M49.9,-77.9C64.7,-68.2,76.7,-54.3,84.3,-38.3C91.9,-22.3,95.3,-4,91.9,12.6C88.5,29.2,78.5,44.3,66.7,57.5C54.8,70.8,41.2,82.2,25.1,88.3C9,94.3,-9.6,95,-26.5,90.1C-43.4,85.2,-58.7,74.7,-69.3,60.9C-79.9,47.2,-85.7,30.2,-88.1,12.8C-90.4,-4.6,-89.1,-22.4,-81.9,-37.1C-74.7,-51.9,-61.6,-63.6,-46.9,-73.3C-32.3,-83.1,-16.1,-90.8,0.7,-92C17.6,-93.1,35.1,-87.6,49.9,-77.9Z"
                          transform="translate(100 100) scale(0.75)"/>
                  </svg>
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
