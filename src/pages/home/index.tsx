import Navbar from '@/componenets/navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center flex-col">
        <div className="w-full h-screen bg-[url('../assets/img/bg2.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <Navbar/>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl text-white font-bold">Welcome to FilmyDuniya</h1>
          <p className="text-2xl text-white my-5">The Best Place to Review Movies</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
