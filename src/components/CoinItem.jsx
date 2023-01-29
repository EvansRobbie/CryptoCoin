import React, { useState }  from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { arrayUnion, updateDoc, doc} from 'firebase/firestore'
import { db } from '../Firebase';
import { toast } from 'react-hot-toast';

const CoinItem = ({coin}) => {
    const {id,market_cap_rank, name, image, symbol, current_price, price_change_percentage_24h,total_volume, market_cap,sparkline_in_7d} = coin
    const {user} = useAuthContext()
    const [savedCoin, setSavedCoin] = useState(false)
    const coinPath = doc(db, 'user', `${user?.email}`)
    const saveCoin = async () =>{
        if(user?.email){
            setSavedCoin(true)
            await updateDoc(coinPath, {
                watchList: arrayUnion({
                    id: id,
                    name: name,
                    image: image,
                    rank: market_cap_rank,
                    symbol:symbol
                })
            })
            toast.success('Coin added to your watchList')
        }else{
            alert('Please sign in to add a coin to your watchList')
        }
    }

   
  return (
  
         <tr className='h-[80px] border-b overflow-hidden'>
            <td onClick={saveCoin}>{savedCoin ? <AiFillStar/> : <AiOutlineStar/>}</td>
            <td>{market_cap_rank}</td>
            <td>
                <Link to={`/coin/${id}`}>
                    <div className='flex items-center'>
                        <img className='w-6 mr-2 rounded-full' src={image} alt={name} />
                        <p className='hidden sm:table-cell'>{name}</p>
                    </div>
                </Link>
            </td>
            <td className='uppercase'>{symbol}</td>
            <td>$ {current_price.toLocaleString()}</td>
            <td >
                {price_change_percentage_24h > 0 ? 
                (<p className='text-green-500'>{price_change_percentage_24h.toFixed(2) }</p>)
                 : (<p className='text-red-500'>{price_change_percentage_24h.toFixed(2) }</p>)}
            </td>
            <td className='w-[180px] hidden md:table-cell'>$ {total_volume.toLocaleString()}</td>
            <td className='w-[180px] hidden sm:table-cell'>$ {market_cap.toLocaleString()}</td>
            <td>
                <Sparklines data={sparkline_in_7d.price}>
                    <SparklinesLine color='teal'/>
                </Sparklines>
            </td>
        </tr>
  )
}

export default CoinItem