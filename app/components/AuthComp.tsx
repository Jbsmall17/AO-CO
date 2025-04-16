import React from 'react'

export default function AuthComp() {
  return (
    <div className='relative leading-none lg:w-[350px] bg-black text-white p-10 pt-6'>
      <p className='text-xl font-semibold italic'>Logo Here</p>
      <div className='px-10 w-full absolute top-[50%] left-[50%] -translate-[50%]'>
        <p className="text-2xl font-semibold mb-4">Let's Help you do<br /> the Running Around</p>
        <p className='text-xs mb-12'>We verify the detials in the best way<br /> possible to save you all hitches</p>
        <div className='flex flex-row gap-4 justify-center items-center'>
            <div className='scale-90 bg-[#8a8a8a] w-3 h-3 rounded-full'></div>
            <div className='w-3 h-3 rounded-full bg-white'></div>
            <div className='scale-90 bg-[#8a8a8a] w-3 h-3 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
