import React from 'react'
import AuthComp from '../components/AuthComp'
import Link from 'next/link'
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi'

export default function page() {
  return (
    <div className='h-screen flex flex-row'>
        <AuthComp />
        <div className='relative leading-none flex-1 pb-10 px-14 pt-6'>
            <p className='text-end text-base font-semibold pb-3'>Don't have an account? <Link href="/signup" className='text-[#213bff]'>Sign Up</Link></p> 
            <hr className='border-t-2'></hr>
            <div className='px-14 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full'>
                <h2 className='leading-none text-2xl font-semibold mb-4'>Welcome Back</h2>
                <form>
                    <label className=' mb-2 block text-sm font-semibold' htmlFor="">Email address</label>
                    <input className="mb-3 px-2 py-3 block rounded-md border border-black w-full" type="text" name="" id="" />
                    <div className='flex flex-row gap-8 mb-8'>
                        <div className='flex-1'>
                            <label className='mb-2 block text-sm font-semibold' htmlFor="">Password</label>
                            <div className="relative mb-3 w-full">
                                <input className="mb-3 px-2 py-3 block rounded-md border border-black h-full w-full" type="text" name="" id="" />
                                <PiEyeSlashLight className='absolute absolute top-[50%] right-2 -translate-y-[50%]' />
                                <PiEyeLight className='hidden absolute top-[50%] right-2 -translate-y-[50%]' />
                            </div>                         
                        </div>
                        <div className='flex-1'>
                            <label className='mb-2 block text-sm font-semibold' htmlFor="">Confirm Password</label>
                            <div className="relative mb-3 w-full">
                                <input  className="mb-3 px-2 py-3 block rounded-md border border-black h-full w-full" type="text" name="" id="" />
                                <PiEyeSlashLight className='absolute absolute top-[50%] right-2 -translate-y-[50%]' />
                                <PiEyeLight className='hidden absolute absolute top-[50%] right-2 -translate-y-[50%]' />
                            </div> 
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='rounded-md bg-black text-white py-3 px-16'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
