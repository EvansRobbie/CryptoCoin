import React from 'react'
import { useNavigate } from 'react-router-dom'
import SavedCoin from '../components/SavedCoin'
import { useAuthContext } from '../context/AuthContext'

const Account = () => {
  const {logOut, user} = useAuthContext()
  const navigate = useNavigate()

  const handleSignOut = async () =>{
    try{
      await logOut()
      navigate('/')
    }
    catch (e){
      console.log(e.message)
    }
     
  }
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div >
          <h1 className='text-2xl font-bold'>Account</h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSignOut} className='border px-6 py-2 shadow-lg rounded-xl hover:shadow-2xl'>Logout</button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='text-2xl font-bold py-4'>Watch List</h1>
          <SavedCoin/>
        </div>
      </div>
    </div>
  )
}

export default Account