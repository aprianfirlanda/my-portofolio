import React from 'react';
import Image from 'next/image';

function CardSkill({ imgSrc, title }) {
    return (
        <div className='flex flex-col items-center rounded-xl bg-white p-2 shadow-lg lg:flex-row'>
            <Image src={imgSrc} alt={title} width={30} height={30} />
            <h4 className='mx-2 text-base font-semibold'>{title}</h4>
        </div>
    );
}

export default CardSkill;
