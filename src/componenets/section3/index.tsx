import React from 'react'
import Image from 'next/image'
import mac from '@/assets/img/mac.png'
import Section from '../section'

const Section3 = () => {
  return (
    <Section>
            <div className='flex flex-col gap-2 w-[40%]'>
                <h1 className='text-4xl font-bold text-white'>Watch everywhere</h1>
                <p className='text-xl text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="bg-cover bg-[url('../assets/img/jurassic.jpg')] bg-center pt-4">
                <Image src={mac} alt='mac' />
            </div>
        </Section>
  )
}

export default Section3
