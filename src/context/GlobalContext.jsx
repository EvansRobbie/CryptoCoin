import axios from 'axios'
import React, {useEffect, useState, createContext, useContext} from 'react'

const baseUrl = 'https://api.coingecko.com/api/v3/'
const coinsUrl = 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
const searchUrl = 'search/trending'

const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    const [coins,setCoins] = useState([])
    const [trending, setTrending] = useState([])
    const url = `${baseUrl}${coinsUrl}`

  useEffect(() =>{
    axios.get(`${url}`).then(res =>{
      setCoins(res.data)
      // console.log(res.data)
    })
   
  },[url])
  // console.log(coins)
  useEffect(()=>{
    axios.get(`${baseUrl}${searchUrl}`).then(res=>{
      setTrending(res.data.coins)
      // console.log(res.data.coins)
    })
  },[])
  return (
    <GlobalContext.Provider value={{coins, trending}}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}

export default GlobalContextProvider