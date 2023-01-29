import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const Home = () => {
  // const { coins} = useGlobalContext()
  return (
    <div>
      <CoinSearch  />
      <Trending/>
    </div>
  )
}

export default Home