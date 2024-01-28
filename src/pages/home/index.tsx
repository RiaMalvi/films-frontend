import Button from '@/componenets/atoms/button'
import Navbar from '@/componenets/navbar'
import React from 'react'
import Section1 from '@/componenets/section1'
import Section2 from '@/componenets/section2'
import Section3 from '@/componenets/section3'

const Home = () => {
  return (
    <div className=''>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-screen bg-[url('../assets/img/bg1.jpg')] bg-cover bg-center">
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl text-white font-bold">Welcome to FilmyDuniya</h1>
              <p className="text-xl text-white my-5">The Best Place to Review Movies</p>
              <p className="text-xl text-white">Ready to watch? Enter your email to create or restart your membership.</p>
              <Button className='text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 me-2 mb-2 my-2 dark:bg-red-600 dark:hover:bg-red-700'>Get Started</Button>
            </div>
          </div>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  )
}

export default Home
