import React from 'react'
import Button from '../atoms/button'

const SForm = () => {
  return (
    <div className="bg-black text-white flex flex-col p-12 bg-opacity-70 rounded-md gap-6 w-96">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <div className="flex flex-col gap-3 items-center">
        <input type="text" placeholder="Name" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3"/>
        <input type="text" placeholder="Phone Number" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" />
        <input type="email" placeholder="Email" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3"/>
        <input type="password" placeholder="Password" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3"/>
        <input type="password" placeholder="Confirm Password" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3"/>
        <Button className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 text-sm !rounded-md w-full">Sign Up</Button>
        <div className="flex gap-2 self-start mt-10">
          <input type="checkbox" className="bg-black border-gray-700 "></input>
          <p className="text-white text-sm">Remember Me</p>
        </div>
        <p className="text-gray-500 text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600 text-xs">Learn more.</span></p>
      </div>
    </div>
  )
}

export default SForm
