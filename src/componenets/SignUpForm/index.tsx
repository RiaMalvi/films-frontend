import React from 'react'
import Button from '../atoms/button'
import { set, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from 'next/router'

const SForm = () => {
  const [formState, setFormState] = React.useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: ''
  })
  const [loading, setLoading] = React.useState(false)
  const [cpasswd, setCPasswd] = React.useState('');
  const router = useRouter()

  const handleSubmit = () => {
    setLoading(true)
    if (formState.password != cpasswd) {
      toast.error('Password does not match', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false
      })
      setFormState({
        username: '',
        name: '',
        email: '',
        phone: '',
        password: ''
      })
      setCPasswd('')
      setLoading(false)
      return
    }
    axios.post('http://localhost:1337/api/auth/local/register', formState).then((res) => {
      toast.success("Account Created Successfully")
      router.push('/login')
    }).catch((err) => {
      toast.error(err.response.data.error.message)
      setFormState({
        username: '',
        name: '',
        email: '',
        phone: '',
        password: ''
      })
      setCPasswd('')
    })
  }

  return (
    <div className="bg-black text-white flex flex-col p-12 bg-opacity-70 rounded-md gap-6 w-96">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <div className="flex flex-col gap-3 items-center">
        <input type="text" placeholder="Username" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formState.username} onChange={(event) => {
          setFormState({ ...formState, username: event.target.value })
        }} />
        <input type="text" placeholder="Name" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formState.name} onChange={(event) => {
          setFormState({ ...formState, name: event.target.value })
        }} />
        <input type="text" placeholder="Phone Number" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formState.phone} onChange={(e) => {
          setFormState({ ...formState, phone: e.target.value })
        }} />
        <input type="email" placeholder="Email" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formState.email} onChange={(event) => {
          setFormState({ ...formState, email: event.target.value })
        }} />
        <input type="password" placeholder="Password" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={formState.password} onChange={(e) => {
          setFormState({ ...formState, password: e.target.value })
        }} />
        <input type="password" placeholder="Confirm Password" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3" value={cpasswd} onChange={(event) => {
          setCPasswd(event.target.value)
        }} />
        <Button className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 text-sm !rounded-md w-full" onClick={handleSubmit} disabled={loading}>Sign Up</Button>
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
