import React from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react';
import Link from 'next/link';
import facebook from "../assests/facebook.png"
import instagram from "../assests/instagram.png"
import twitter from "../assests/twitter.png"
import copyright from "../assests/copyright.png"
const Footer = () => {
  return (
    <>
        <footer className="footer px-[5%] sm:footer-horizontal bg-white text-base-content p-10">
            <aside className='first-column space-y-2'>
                <Link href='/'>
                    <Image 
                        src={"/logo.png"} 
                        alt='AO and CO logo'
                        width={200} 
                        height={60}
                        className='cursor-pointer object-contain image'
                    />
                </Link>
                <p className='lg:w-[350px] text-black'>
                    AO & CO is a customer verification agency that helps businesses confirm if their clients truly live at theaddresses they provide.
                </p>
                <p className='lg:w-[320px] text-black'>
                    We send trained field agents to physically verify each address and deliver accurate, photo-backed reports.
                </p>
            </aside>
            <nav className='second-column text-black'>
                <h6  className="text-[#0f170a] text-base">Quick Action</h6>
                <Link href="/" className="link link-hover text-[#0f170a]">Home</Link>
                <Link href="/about" className="link link-hover text-[#0f170a]">About Us</Link>
                <Link href="/how-it-works" className="link link-hover text-[#0f170a]">How it works</Link>
                <Link href="/admin/login" className="link link-hover text-[#0f170a]">Admin Log</Link>
            </nav>
            <div className='third-column'>
                <Mail className='text-[#485d3a] text-3xl' />
                <a className='text-[#485d3a] text-sm font-semibold whitespace-nowrap' href="mailto:aoandcoconsultancy@gmail.com">Email: aoandcoconsultancy@gmail.com</a>
            </div>
        </footer> 
        <footer className="footer px-[5%] sm:footer-horizontal bg-[#485d3a] text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <Image src={copyright} alt="copyright" className='inline-block' />
                <p className='text-[#b1d29b]'> 
                    {new Date().getFullYear()} AO and CO. All right reserved
                </p>
            </aside>
            <nav className="grid-flow-col gap-8 md:place-self-center md:justify-self-end">
                <a>
                    <Image src={facebook} alt="facebook" />    
                </a>
                <a>
                    <Image src={instagram} alt="instagram" />
                </a>
                <a>
                    <Image src={twitter} alt="twitter" />
                </a>
  </nav>
</footer>
    </>
  )
}


export default Footer
