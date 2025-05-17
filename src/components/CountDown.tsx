'use client'
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-06-27")

const CountDown = () => {
  return (
    <Countdown date={endingDate} className='text-yellow-300 text-5xl font-bold'/>
  )
}

export default CountDown