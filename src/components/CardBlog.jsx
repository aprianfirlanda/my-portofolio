import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CardBlog() {
  return (
    <section id="blog" className="pb-32 pt-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Latest Post</h2>
            <p className="text-base font-medium md:text-lg">
              Welcome to my blog, where I document my knowledge and experiences as a personal memory
              bank. This is where I capture thoughts and insights, so I can revisit them whenever
              needed.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <Link href={`/blog/go/go-project-setup-guide`}>
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="flex w-full justify-center">
                  <Image
                    src={'/images/blogs/go-project-setup-guide.png'}
                    alt={'init setup go project image'}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="px-6 py-8">
                  <h3 className="mb-3 block truncate text-xl font-semibold hover:text-primary">
                    Go Project Setup Guide
                  </h3>
                  <p className="mb-6 text-base font-medium">
                    This article covers setting up a new backend project with Go. The tech stack
                    includes Go Fiber, Gorm, Goose for database migrations, Cobra CLI, Viper,
                    Logrus, and more.
                  </p>
                  <span className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardBlog;
