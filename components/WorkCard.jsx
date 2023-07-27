import React from 'react'
import Link from "next/link";
import styles from "../styles/homebg.module.css";
import { AiOutlinePlayCircle } from "react-icons/ai";

const WorkCard = (props) => {
const {value,heading,tag} = props
  return (
    <>
        <div className='flex flex-col justify-start items-start p-[20px] w-[100%] sm:w-[324px] h-auto border-[1px] gap-[20px] border-[#fff] rounded-md'>

            {value && <div className='w-[100%] bg-[#8474C4] h-[140px] rounded-md'></div>}
            <div className=' rounded-md text-[14px] font-medium px-[12px] py-[4px] text-black bg-[#FFA800]'>{tag}</div>
            <div className='flex justify-start items-center'>
                <h1 className='text-[20px] sm:text-[22px] font-semibold'>{heading}</h1>
            </div>
            <button className='flex justify-start gap-[10px] items-center text-[14px] sm:text-[16px] mb-[14px] text-[#728095]'>
                Read more
                <AiOutlinePlayCircle/>
            </button>
        </div>
    </>
  )
}

export default WorkCard