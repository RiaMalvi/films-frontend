import React from 'react'
import Image from 'next/image'
import tv from '@/assets/img/tv.png'
import Section from '../section'

const Section1 = () => {
    return (
        <Section>
            <div className='flex flex-col gap-2 w-[40%]'>
                <h1 className='text-4xl font-bold text-white'>Enjoy on your TV.</h1>
                <p className='text-xl text-white'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="bg-cover bg-[url('../assets/img/fighter.jpg')] bg-center">
                <Image src={tv} alt='tv' />
            </div>
        </Section>
    )
}

export default Section1
