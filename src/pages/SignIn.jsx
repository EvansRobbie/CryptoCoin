import React, { useState } from 'react'
import {AiOutlineMail, AiFillLock} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const SignIn = () => {
  const {signIn} = useAuthContext()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setErrors('')
    try{
      await signIn(email, password)
      navigate('/account')
    }
    catch (e){
      setErrors(e.message)
    }
  }
  return (
    <div className='max-w-[400px] mx-auto max-h-[600px] px-4 py-12'>
      <h1 className='text-xl font-bold'>Sign In</h1>
      {errors ? (<p>{errors}</p>): null}
      <form onSubmit={handleSubmit} >
        <div className='my-4'>
          <label htmlFor="email">Email</label>
          <div className='rounded-2xl shadow-xl relative my-2 w-full'>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" id='email' className='bg-primary p-2 w-full border border-input rounded-2xl'/>
            <AiOutlineMail className='absolute top-3 right-2 text-gray-400'/>
          </div>
          <label htmlFor="password">Password</label>
          <div className='rounded-2xl shadow-xl w-full relative my-2'>
            <input onChange={(e)=>setPassword(e.target.value)}  type="password" id='password' className='w-full rounded-2xl p-2 bg-primary border border-input'  />
            <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
          </div>
        </div>
        <button className='w-full my-2 bg-button p-3 text-btnText rounded-2xl hover:ring-2 ring-cyan-400/50 transition ease-in shadow-xl'>Sign in</button>
      </form>
      <p>Don't have an Account? <Link to='/signup' className='text-accent'>Sign Up</Link></p>
    </div>
  )
}

export default SignIn