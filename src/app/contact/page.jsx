'use client'
import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl text-center mb-24 font-bold text-red-500">Contact Us</h1>
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="relative flex-1 h-[500px]">
          <Image
            src='/contact.png'
            alt='Contact Illustration'
            fill
            className="object-contain animate-move"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input
            type='text'
            placeholder='Name'
            className="p-5 bg-transparent border-4 border-red-400 text-black-300 text-lg font-bold outline-none"
          />
          <input
            type='text'
            placeholder='Email'
            className="p-5 bg-transparent border-4 border-red-400 text-black-500 text-lg font-bold outline-none"
          />
          <textarea
            placeholder='Message'
            className="p-5 bg-transparent border-4 border-red-400 text-black-500 text-lg font-bold outline-none"
            rows='10'
          ></textarea>
          <button
            type='submit'
            className="p-4 mt-2 bg-red-500 hover:bg-blue-700 text-white font-semibold text-lg rounded-md transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact