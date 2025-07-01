import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <main className='mx-auto w-full max-w-screen-2xl h-auto flex flex-row'>
        <Sidebar />
        <div className='bg-[#f6f6f7] flex-1 px-4 md:px-6 lg:px-8 pt-6'>
            <Header />
            {children}
        </div>
    </main>
  )
}
