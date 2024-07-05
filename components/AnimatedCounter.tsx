'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
       <CountUp 
       
        decimal=","
        decimals={2}
        end={amount}
        prefix='PKR '/>
    </div>
  )
}

export default AnimatedCounter