import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='flex flex-col bg-black  h-screen md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h[70vh]'>
      {/**TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className='text-5xl text-white font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className=' text-white font-bold xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p>
          <CountDown/>
          <button className='bg-red-500 px-6 py-3 rounded-md text-white'>Order Now</button>
      </div>
      {/**IMAGE CONTAINER */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image src='/offerProduct.png' alt='' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer