import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homebg.module.css";


const Landing = () => {
    return (
        <>
            <div className={`flex flex-col justify-center bg-[#110F0F] items-center w-[100vw] h-[100vh]  overflow-hidden ${styles["bg-image"]} relative `}>
                <div className="absolute left-[-50px] bottom-[-15px] flex justify-center items-center">
                    <div className={`w-64 h-64 bg-[#EF9364] rounded-full filter blur-[70px]`}></div>
                </div>
                <div className="absolute right-[-50px] top-[-15px] flex justify-center items-center">
                    <div className={`w-64 h-64 bg-[#8B7BCF] rounded-full filter blur-[70px]`}></div>
                </div>                                                                                                                 
                <div className=" text-center sm:text-left w-[90%] sm:w-[500px] font-semibold leading-[17vw] sm:leading-[90px] mt-[40px] text-[15vw] sm:text-[90px] text-[#fff] z-50 mb-[20px] sm:mb-[0px]"> Attract <span className="bg-gradient-to-r from-[#9F8CED] from-1% via-[#FA7C0B] via-90% to-[#9DE8EE] to-9% text-transparent bg-clip-text">NewLeads</span> like never before </div>
                <div className="flex justify-center items-center text-left whitespace-normal z-50">
                    <p className="w-[90%] sm:w-[500px] font-thin text-center sm:text-left whitespace-normal p-2 text-[15px] sm:text-[18px]">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p> 
                </div>
                <div className="w-[500px] flex justify-center sm:justify-start items-center mt-[25px] gap-[10px] sm:gap-8 z-50">
                    <input type="email" className=" sm:ml-[10px] flex self-start rounded-[100px] py-[8px] px-[12px] sm:py-[12px] sm:px-[16px] bg-black border-[#fff] border-[1.5px] sm:w-[60%]" placeholder="Email"/>
                    <button className="py-[8px] px-[12px] sm:py-[12px] sm:px-[16px] rounded-[100px] text-[#000] bg-[#FFA800]">Attract</button>
                </div>
            </div>
        </>
    )
}

export default Landing