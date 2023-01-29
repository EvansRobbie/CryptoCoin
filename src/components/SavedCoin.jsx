import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { onSnapshot, updateDoc, doc} from 'firebase/firestore'
import { db } from '../Firebase'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
const SavedCoin = () => {
  const {user} = useAuthContext()
  const [getCoin, setGetCoin] = useState([])

  useEffect(()=>{
    onSnapshot(
      doc(db, 'user', `${user?.email}`), (doc) =>{
        setGetCoin(doc.data()?.watchList)
      }
    )
  }, [user?.email])

  const coinPath = doc(db, 'user', `${user?.email}`)

  const deleteSavedCoin = async (id) =>{
   try{
      const result = getCoin?.filter((coin) => coin.id !== id)
      await updateDoc(coinPath, {
        watchList:result
      })
      toast.success('Coin removed from your watchList')
   }
   catch (e){
    console.log(e)
   }
  
  }

  const coinElement = getCoin?.map((coin) =>{
    const { id, rank, image, name, symbol} = coin
    return( 
    <tr key={id} className='h-[60px] overflow-hidden'>
      <td>{rank}</td>
      <td>
        <Link to= {`/coin/${id}`}>
          <div className='flex items-center'>
            <img src={image} alt={name} className='w-8 mr-4' />
          
          <p className='hidden sm:table-cell'>{name}</p>
          <p className='text-gray-500 text-center text-sm uppercase px-2'>{symbol}</p>
          </div>
        </Link>
      </td>
      <td className='pl-8'>
        <AiOutlineClose onClick={()=>deleteSavedCoin(id)}  className='cursor-pointer'/>
      </td>
    </tr>)
  })
 
  return (
    <div>
        { getCoin?.length === 0 ? (<p className='text-center font-semibold text-gray-100/50'>
          You do not have any coin saved. Please add coin to your watchList.
        </p>): (
          <table className='w-full border-collapse text-center'>
            <thead>
              <tr className='border-b'>
                <th className='px-4'>Rank</th>
                <th className='text-left'>Coin</th>
                <th className='text-left'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {coinElement}
            </tbody>
          </table>
        )}
    </div>
  )
}

export default SavedCoin