import React from 'react'
import Header from '../_components/Header'
import Sidebar from '../_components/Sidebar'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main className='w-[95%] mx-auto max-w-screen-xl h-auto flex flex-col'>
        <Header />
        <section className='flex-1 flex flex-col lg:flex-row gap-6 mb-4'>
            <Sidebar />
            {children}
        </section>
    </main>
  )
}
