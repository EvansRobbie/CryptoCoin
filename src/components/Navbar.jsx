import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useAuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {user, logOut} = useAuthContext()
    const navigate = useNavigate()
    
    const [nav, setNav] = useState(false)
    const handleSignOut = async () =>{
        try{
          await logOut()
          navigate('/')
        }
        catch (e){
          console.log(e.message)
        }
         
      }

    const handleNav = () =>{
        setNav(!nav)
    }
    {nav ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'}
    // if(nav){
    //      document.body.style.overflow = 'hidden'
    // }else{
    //     document.body.style.overflow = 'scroll'
    // }
  return (
    <div className='flex justify-between items-center rounded-div h-20 font-bold ease-in duration-300'>
        <Link to= '/'>
            <h1 className='text-xl'>Cryptocoin</h1>
        </Link>
        <div className='hidden md:block'>
        <ThemeToggler/>
        </div>
        {user?.email ? (<div className='hidden md:block'>
            <Link to='/account'className='p-4'>Account</Link>
            <button onClick={handleSignOut} className='bg-button text-btnText py-2 px-5 rounded-2xl shadow-lg hover:shadow-2xl ml-2 transition '>Logout</button>
        </div>): <div className='hidden md:block'>
            <Link to='/signin' className='p-4 hover:text-accent'>Sign In</Link>
            <Link to='/signup' className='bg-button text-btnText py-2 px-5 rounded-2xl shadow-lg hover:shadow-2xl ml-2 '>Sign Up</Link>
        </div>}
        {/* menu icon */}
        <div className='block md:hidden cursor-pointer z-20' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        {/* mobile menu */}
        <div className={`${ nav ? 'right-0': '-right-full'} md:hidden fixed top-20  flex flex-col justify-between items-center w-full h-[90%] bg-primary z-10 ease-in duration-500`}>
            <ul className='w-full p-4'>
                <li onClick={handleNav} className=' border-b py-6'>
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={handleNav} className=' border-b py-6'>
                    <Link to='/account'>Account</Link>
                </li>
                
                <li className=' border-b py-6'>
                    <ThemeToggler/>
                </li>
            </ul>
           {user?.email ? (
            <div className='w-full p-4'>
                 <button onClick={logOut} className='w-full my-4 p-3 bg-button rounded-xl shadow-2xl ease-in duration-300 text-btnText '>LogOut</button>
              </div>
         ): (
             <div className='flex flex-col w-full p-4 '>
             <Link to='/signin'>
                 <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-xl shadow-2xl ease-in duration-300  '>Sign in</button>
              </Link>
              <Link to='/signup'>
                 <button onClick={handleNav} className='w-full my-3 p-3 bg-button rounded-xl shadow-2xl ease-in duration-300 text-btnText '>Sign up</button>
              </Link>
         </div>
           )}
        </div>
    </div>
  )
}

export default Navbar