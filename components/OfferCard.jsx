import React from 'react'
import Link from "next/link";
import styles from "../styles/homebg.module.css";

const OfferCard = (props) => {
    const {src,heading,text} = props
  return (
    <>
        <div className='flex flex-col justify-start items-start p-[20px] w-[324px] border-[1px] gap-3 border-[#fff] rounded-md'>
            <div className='flex justify-start items-center mt-[8px]'>
                <img src={src} className='w-[44px] object-cover'/>
            </div>
            <div className='flex justify-start items-center'>
                <h1 className='text-[22px] sm:text-[28px] font-semibold'>{heading}</h1>
            </div>
            <div className='flex justify-start items-center text-[15px] sm:text-[18px] mb-[14px]'>
                <p className=' whitespace-normal '>
                    {text}
                </p>
            </div>
        </div>
    </>
  )
}

export default OfferCard