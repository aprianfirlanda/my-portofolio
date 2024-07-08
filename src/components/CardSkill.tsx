import React from 'react'
import Image from 'next/image'

interface Props {
  imgSrc: string
  title: string
}

function CardSkill({ imgSrc, title }: Props) {
  return (
    <div className='flex flex-wrap items-center rounded-xl bg-white p-3 shadow-lg'>
      <Image src={imgSrc} alt={title} width={50} height={50} />
      <h4 className='mx-3 text-lg font-bold'>{title}</h4>
    </div>
  )
}

export default CardSkill
