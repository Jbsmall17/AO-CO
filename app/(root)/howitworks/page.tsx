import Image from 'next/image'
import React from 'react'
import { Suspense } from 'react'



const page = () => {
  return (
    <main>
        <section className='px-[5%] bg-[#d8e9cd] pb-8 md:pt-10 lg:pt-12 xl:pt-14 pb-10 md:pb-12 lg:pb-14 xl:pb-18 flex justify-center items-center'>
            <div className='relative p-4 pt-8 pb-10 md:p-8'>
                <Image src='/star.png' alt="star icon" className='absolute right-12 md:right-16 bottom-2 md:bottom-4' width={16} height={16} />
                <Image className='translate-x-6 md:translate-x-4 translate-y-8 md:translate-y-4 scale-70 lg:scale-80 absolute bottom-0 right-0' src='/thinking.png' alt="thinking icon" width={50} height={50} />
                <p className='flex'> 
                    <Image className='inline  h-[52px] md:h-[57px] lg:h-[62px] w-[52px] md:w-[57px] lg:w-[62px]' src='/lightbulb.png' alt="lightbulb icon" width={52} height={52} />
                    <span className='self-end text-2xl md:text-3xl text-[#0f170a] font-semibold'>Learn How our Platform</span>
                </p>
                <p className='whitespace-nowrap text-2xl md:text-3xl text-[#0f170a] font-semibold mb-4 md:mb-6'>Works in Just Four Easy Steps</p>
                <p className='mx-auto text-base font-semibold md:w-[375px] text-center'>With our easy to use platform, Our clients will find it very easy to complete their task</p>
            </div>
        </section>
        <Suspense fallback={<div className="min-h-[400px] flex justify-center items-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#485d3a]"></div></div>}>
        <section className='px-[5%] py-6 md:py-8 lg:py-10'>
            <p className='text-center font-semibold text-2xl md:text-3xl text-[#485d3a] mb-3 lg:mb-4'>How it works</p>
            <div className='flex flex-col md:flex-row gap-6 lg:gap-10 h-auto md:h-[420px]'>
                <div className='flex-1'>
                    <div className='mb-4 h-8 w-8 text-base font-semibold flex justify-center items-center text-white rounded-full bg-[#485d3a]'>01</div>
                    <p className='mb-4 text-base text-[#485d3a] font-semibold'>Sign Up</p>
                    <p className='text-base text-[#0f170a] md:w-[300px] lg:w-[350px]'>
                        Start by creating a free AO & CO account using your name, email, and company details.
                        This gives you access to your personal dashboard where you can begin uploading addresses for verification.
                    </p>
                </div>
                <div className='w-full md:w-1 h-1 md:h-auto bg-[#485d3a] shrink-0'></div>
                <div className='flex-1 self-end pb-6 md:pb-6 border-b-4 border-b-[#485d3a] md:border-b-0 mb-6 md:mb-0'>
                    <div className='mb-4 h-8 w-8 text-base font-semibold flex justify-center items-center text-white rounded-full bg-[#485d3a]'>02</div>
                    <p className='mb-4 text-base text-[#485d3a] font-semibold'>Upload Documents</p>
                    <p className='text-base text-[#0f170a] md:w-[300px] lg:w-[350px]'>
                        Once signed in, easily upload an Excel file containing the list of addresses you want verified.
                        AO & CO instantly processes your file and prepares each address for assignment to a field agent.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 lg:gap-10 h-auto'>
                <div className='flex-1 self-end'>
                    <div className='mb-4 h-8 w-8 text-base font-semibold flex justify-center items-center text-white rounded-full bg-[#485d3a]'>03</div>
                    <p className='mb-4 text-base text-[#485d3a] font-semibold'>Download Reports</p>
                    <p className='text-base text-[#0f170a] md:w-[300px] lg:w-[350px]'>
                        Once verification is complete, you&apos;ll receive a detailed report for each address, including pictures, agent notes, and verification status. 
                        Simply log in to your dashboard to view, download, or share the reports with your team.
                    </p>
                </div>
                <div className='w-full md:w-1 h-1 md:h-auto bg-[#485d3a] shrink-0'></div>
                <div className='flex-1'>
                    {/* <div className='mb-4 h-8 w-8 text-base font-semibold flex justify-center items-center text-white rounded-full bg-[#485d3a]'>03</div>
                    <p className='mb-4 text-base text-[#485d3a] font-semibold'>Waiting Period</p>
                    <p className='text-base text-[#0f170a] md:w-[300px] lg:w-[350px]'>
                        Sit back while our trained field agents head out to physically verify each address on your list.
                        You can track progress in real-time from your dashboard, with status updates like “Pending,” “In Progress,” or “Completed.”
                    </p> */}
                </div>
            </div>
        </section>
        </Suspense>
    </main>
  )
}
export default page