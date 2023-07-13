import React from 'react'
import Link from "next/link";
import styles from "../styles/homebg.module.css";
import OfferCard from "@/components/OfferCard"

const Offers = () => {
  return (
    <>
        <div className='w-[100vw] h-auto gap-[15px] px-[20px] py-[50px] sm:p-[70px] bg-[#110F0F] flex flex-col justify-center items-center'>
            <div className='w-[500px] flex justify-center items-center  sm:mt-0'><h1 className='font-bold text-[38px] sm:text-[48px]'>We offer</h1> </div>
            <div className='w-[90vw] sm:w-[600px] mb-[12px] text-[15px] sm:text-[18px] flex justify-center items-center'> 
                <p className='whitespace-normal text-center'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            </div>
            <div className='flex flex-wrap w-[100%] justify-center gap-10'>
                <OfferCard src='./Brand.png' heading="Branding" text="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"/>
                <OfferCard src='./Development.png' heading="Web Development" text="Integer ante non nunc, eget est justo vel semper nunc. Lacus "/>
                <OfferCard src='./Marketing.png' heading="Digital Marketing" text="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."/>
                <OfferCard src='./Mobile.png' heading="Mobile App" text="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"/>
                <OfferCard src='./SEO.png' heading="SEO" text="Integer ante non nunc, eget est justo vel semper nunc. Lacus "/>
                <OfferCard src='./Testing.png' heading="User Testing  " text="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."/>
            </div>
        </div>
    </>
  )
}

export default Offers