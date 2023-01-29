import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext';
import CoinItem from './CoinItem';

const CoinSearch = () => {
    const { coins } = useGlobalContext()
     // Search state
     const [search, setSearch] = useState('')
    
// console.log(coins)
    const coinElement = coins.filter((value)=>{
        if (search === ''){
            return value
        } else if( value.name.toLowerCase().includes(search.toLowerCase())) {
            return value    
        }
        return false
    }).map((coin) =>{
        return(
       <CoinItem coin = {coin} key={coin.id}/>
    )})
  return (  
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-semibold my-2'>Search Crypto</h1>
            <form >
                <input onChange={(e) => setSearch(e.target.value)} className='w-full bg-primary border border-input rounded-2xl shadow-xl px-4 py-2' type="text" placeholder='search a Coin' />
            </form>
        </div>
        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Mkt</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {coinElement}
            </tbody>
        </table>
    </div>
  )
}

export default CoinSearch