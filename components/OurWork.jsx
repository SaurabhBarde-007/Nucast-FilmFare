import React from 'react'
import Link from "next/link";
import styles from "../styles/homebg.module.css";
import WorkCard from "@/components/WorkCard"

const OurWork = () => {
  return (
    <>
        <div className='bg-[#110F0F] w-[100vw] h-auto py-[80px] px-[20px] sm:px-[40px] flex justify-center items-start flex-wrap gap-[40px] '>
            <div className='flex flex-col justify-center items:center  gap-[20px] w-[500px]'>
                <h1 className='font-bold text-[32px] text-center lg:text-left sm:text-[34px]'>Some Pieces of Our Work</h1>
                <p className=' whitespace-normal text-[14px] text-center lg:text-left sm:text-[16px]'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
                <button className="w-[100%] sm:w-[150px] px-[14px] py-[8px] sm:px-[16px] sm:py-[8px] rounded-[100px] text-[#FFA800] border-[#FFA800] border-[1.5px] flex justify-center self-center lg:self-start">
                  Show More
                </button>
            </div>
            <div className='flex justify-center items-start gap-[40px] flex-wrap'>
              <div className='flex justify-center items-center flex-col gap-[20px]'>
                <WorkCard heading="Creative Landing Page" tag="WEBSITE" value={true}/>
                <WorkCard heading="Creative Branding" tag="BRANDING" value={false}/>
                <WorkCard heading="Automation. Advanced Level" tag="DEVELOPMENT" value={false}/>
              </div>
              <div className='flex justify-center items-center flex-col gap-[20px]'>
                <WorkCard heading="Why We Collect User’s Data" tag="DIGITAL MARKETING" value={false}/>
                <WorkCard heading="Creative Landing Page" tag="USER TESTING" value={true}/>
                <WorkCard heading="How We Optimized Our SEO" tag="SEO" value={false}/>
              </div>
            </div>
        </div>
    </>
  )
}

export default OurWork