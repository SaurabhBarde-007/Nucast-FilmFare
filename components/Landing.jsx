import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homebg.module.css";


const Landing = () => {
  return (
    <>
        <div className={`flex flex-col justify-center bg-[#110F0F] items-center w-[100vw] h-[100vh]  overflow-hidden ${styles["bg-image"]} relative`}>
            <div className="absolute left-[-50px] bottom-[-15px] flex justify-center items-center">
                <div className={`w-64 h-64 bg-[#EF9364] rounded-full filter blur-[70px]`}></div>
            </div>
            <div className="absolute right-[-50px] top-[-15px] flex justify-center items-center">
                <div className={`w-64 h-64 bg-[#8B7BCF] rounded-full filter blur-[70px]`}></div>
            </div>                                                                                                                 
            <div className="w-[500px] font-semibold leading-[90px] mt-[40px] text-[90px] text-[#fff]"> Attract <span className="bg-gradient-to-r from-[#9F8CED] from-1% via-[#FA7C0B] via-90% to-[#9DE8EE] to-9% text-transparent bg-clip-text">NewLeads</span> like never before </div>
            <div className="flex justify-center items-center text-left whitespace-normal">
                <p className="w-[500px] font-thin text-left whitespace-normal p-2">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p> 
            </div>
            <div className="w-[500px] flex justify-start items-center mt-[25px] gap-8">
                <input type="email" className="ml-[10px] flex self-start rounded-[100px] py-[12px] px-[16px] bg-black border-[#fff] border-[1.5px]" placeholder="Email"/>
                <button className="px-[20px] py-[12px] rounded-[100px] text-[#000] bg-[#FFA800]">Attract</button>
            </div>
        </div>
    </>
  )
}

export default Landing