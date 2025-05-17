import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CatagoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item=>(
        <Link href={`/product/${item.id}`} key={item.id} className='even:bg-fuchsia-100 group flex flex-col justify-between p-4 w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3'>
          {/**IMAGE CONTAINER */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt='' fill className='object-contain'/>
            </div>
          )}
          {/**TEXT CONTAINER */}
          <div className='flex flex-row items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block bg-red-500 p-2 text-white rounded-md uppercase'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CatagoryPage