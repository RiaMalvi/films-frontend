import React from 'react'
import Footer from '@/componenets/footer'
import Form from '@/componenets/SignUpForm'

const SignUp = () => {
  return (
    <div className="w-full min-h-screen bg-[url('../assets/img/bg1.jpg')] bg-cover bg-center flex flex-col">
      <div className="w-full min-h-screen flex flex-col backdrop-brightness-50 items-center">
        <div className="self-start text-4xl font-bold text-red-600 drop-shadow-xl p-4 mx-12 mt-2">FilmyDuniya</div>
        <div className="p-8">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
