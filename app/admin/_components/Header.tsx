"use client"
import React from 'react'
import { LogOut, Menu } from "lucide-react";
import Image from 'next/image';
import { useMyContext } from '@/app/context/MyContext';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const { toggleSidebar } = useMyContext()

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        router.push('/admin/login');
    }

  return (
    <header className='flex justify-between items-center py-2'>
        <Image
            src={'/logo.png'}
            width={200}
            height={60}
            alt="AO and CO logo"
            className='object-contain image'
        />
        <div className='hidden md:flex flex-row gap-2 items-center'>
            <div onClick={handleLogout} className='cursor-pointer rounded-lg p-2 border-2 border-[#9fe273] flex flex-row gap-3 items-center hover:border-red-500 hover:bg-red-500 hover:text-white'>
                <LogOut className='text-2xl' />
                <span className='text-base'>Log Out</span>
            </div>
            <Menu
                onClick={toggleSidebar}
                className="hidden md:block lg:hidden text-2xl" 
            />    
        </div>
        <Menu
            onClick={toggleSidebar} 
            className="cursor-pointer block md:hidden text-2xl" 
        />
    </header>
  )
}
