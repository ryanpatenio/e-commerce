import React from 'react'
import Clients  from './Cards/ClientCounts'
import OrderCounts from './Cards/OrderCounts'
import Earnings from './Cards/Earnings'
import CurrentBalance from './Cards/CurrentBalance'

const StatsCard = () => {
  return (
    <>
    <Clients />
    <OrderCounts />
    <Earnings />
    <CurrentBalance />
    </>

  )
}

export default StatsCard