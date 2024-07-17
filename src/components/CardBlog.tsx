import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: number
  imgSrc: string
  title: string
  synopsis: string
}

function CardBlog({ id, imgSrc, title, synopsis }: Props) {
  return (
    <Link href={`/blog/${id}`}>
      <div className='mb-10 overflow-hidden rounded-xl bg-white shadow-lg'>
        <div className='flex w-full justify-center'>
          <Image src={imgSrc} alt={title} width={250} height={250} />
        </div>
        <div className='px-6 py-8'>
          <h3 className='mb-3 block truncate text-xl font-semibold text-dark hover:text-primary'>
            {title}
          </h3>
          <p className='mb-6 truncate text-base font-medium text-secondary'>
            {synopsis}
          </p>
          <span className='rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80'>
            Baca Selengkapnya
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CardBlog
