"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import signup from "../assests/signup.png"
import upload from "../assests/upload.png"
// import waiting from "../assests/waitingPeriod.png"
import download from "../assests/download.png"


interface StepsProps {
    step: string;
    title: string;
    description: string;
    image: StaticImageData;
    bgColor: string
}

const HowItWorks = () => {

    const Step = ({step,title,description,image,bgColor}:StepsProps) =>{
        return (
            <div style={{backgroundColor: bgColor, border: bgColor== "#b1d29b" ? '0px solid #b1d29b' : '1.5px solid #b1d29b' }} className={`rounded-lg px-4 py-6`}>
                <div className='flex flex-row justify-between items-start mb-14'>
                    <p className={`text-xl font-semibold ${bgColor== "#b1d29b" ? "text-[#0f170a]": "text-[#485d3a]"}`}>{step}</p>
                    <Image className='scale-80' src={image} alt={"icon"} />
                </div>
                <p className={`${bgColor== "#b1d29b" ? "text-[#0f170a]": "text-[#485d3a]"} text-xl mb-4 font-semibold`}>{title}</p>
                <p className={`${bgColor== "#b1d29b" ? "text-[#0f170a]": "text-[#485d3a]"} text-base text-[#0f170a] font-normal`}>{description}</p>
            </div>
        )
    }

  return (
    <section className='px-[5%] bg-[#f5f9f2] pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16'>
        <p className='text-center font-semibold text-2xl md:text-3xl text-[#0f170a] mb-3 lg:mb-4'>How it works</p>
        <p className='text-center mx-auto text-[#485d3a] md:w-[325px] mb-6 lg:mb-8'>See the step by step process on how to get your clients addresses verifed</p>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 md:gap-6 lg:gap-8 justify-items-center'>
            <Step 
                step={"01"}
                title={"Sign Up"}
                description={"Create an account and fill in your company important details"}
                image={signup}
                bgColor={"#b1d29b"}
            />
            <Step 
                step={"02"}
                title={"Upload Docs"}
                description={"Upload the file as an excel file for easy data reading"}
                image={upload}
                bgColor={"#ffffff"}
            />
            {/* <Step 
                step={"03"}
                title={"Waiting Period"}
                description={"Wait for our agents to verity the addresses on the file"}
                image={waiting}
                bgColor={"#ffffff"}
            /> */}
            <Step 
                step={"03"}
                title={"Download Report"}
                description={"Download the report of your file and transaction complete."}
                image={download}
                bgColor={"#ffffff"}
            />
        </div>
    </section>
  )
}

export default HowItWorks
