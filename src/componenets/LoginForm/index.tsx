import React from 'react'
import Button from '../atoms/button'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'
import axios from 'axios'

const Form = () => {
  const router = useRouter()
  const [formstate, setFormState] = React.useState({
    identifier: '',
    password: ''
  })

  const [loading, setLoading] = React.useState(false)

  const handleLogin = () => {
    setLoading(true)
    axios.post('http://localhost:1337/api/auth/local', formstate).then((res) => {
      toast.success("Logged In Successfully", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false
      })
    }).catch((error) => {
      toast.error("Error Occured")
    }).finally(() => {
      router.push('/home')
    })
  }

  return (
    <div className="bg-black text-white flex flex-col p-12 bg-opacity-70 rounded-md gap-6 w-96">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <div className="flex flex-col gap-3 items-center">
        <input type="text" placeholder="Email or Phone Number" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formstate.identifier} onChange={(e) => {
          setFormState({...formstate, identifier: e.target.value})
        }}/>
        <input type="password" placeholder="Password" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formstate.password} onChange={(e) => {
          setFormState({...formstate, password: e.target.value})
        }}/>
        <Button className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 text-sm !rounded-md w-full" onClick={handleLogin} disabled={loading}>Sign In</Button>
        <p className="text-white text-sm">Forgot Password?</p>
        <div className="flex gap-2 self-start mt-10">
          <input type="checkbox" className="bg-black border-gray-700 "></input>
          <p className="text-white text-sm">Remember Me</p>
        </div>
        <p className="text-gray-400 self-start text-sm">New to Netflix? <span className="font-semibold text-white text-sm cursor-pointer" onClick={()=>{router.push('/signup')}}>Sign Up Now.</span></p>
        <p className="text-gray-500 text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600 text-xs">Learn more.</span></p>
      </div>
    </div>
  )
}

export default Form
