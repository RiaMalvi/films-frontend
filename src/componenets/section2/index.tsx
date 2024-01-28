import React from 'react'
import Image from 'next/image'
import phone from '@/assets/img/phone.jpg'
import Section from '../section'

const Section2 = () => {
    return (
        <Section>
            <div>
            <Image src={phone} alt='phone' />
            </div>
            <div className='flex flex-col gap-2 w-[40%]'>
                <h1 className='text-4xl font-bold text-white'>Download your shows to watch offline</h1>
                <p className='text-xl text-white'>Save your favourites easily and always have something to watch.</p>
            </div>   
    </Section >
  )
}

export default Section2
