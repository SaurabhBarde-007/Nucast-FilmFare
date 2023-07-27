import React, { useState } from "react";
import Link from "next/link";

const Discuss = () => {
    return (
        <>
            <div className="w-[100vw] h-auto py-[50px] px-[20px] sm:py-[60px] sm:px-[60px] flex flex-col items-center gap-[20px] bg-[#110F0F]">
                <div className="py-[30px] px-[20px] sm:py-[50px] sm:px-[30px] w-[100%] bg-[#FFB219] flex flex-col justify-center items-center text-[#000] gap-[20px]">
                    <h1 className=" font-bold text-center text-[28px] sm:text-[35px]">Let's discuss the idea</h1>
                    <p className="text-[15px] text-center sm:text-[18px] w-[85%] sm:w-[50%]">
                        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. 
                    </p>
                    <div className="w-[500px] flex flex-col sm:flex-row justify-center items-center gap-6">
                        <input type="email" className="text-[15px] sm:text-[18px] ml-[10px] flex rounded-[100px] py-[8px] px-[12px] sm:py-[12px] sm:px-[16px] bg-white border-[#A1AEBF] border-[1.5px]" placeholder="Your Mail"/>
                        <button className="px-[16px] py-[8px] sm:px-[20px] sm:py-[12px] rounded-[100px] text-[#fff] text-center font-extralight text-[15px] sm:text-[18px] bg-[#000]">SEND</button>
                    </div>
                </div>
                <button className="text-[15px] sm:text-[18px] px-[12px] py-[8px] sm:px-[16px] sm:py-[10px] rounded-[100px] text-[#FFA800] border-[#FFA800] border-[1.5px] flex self-center sm:self-end">
                        GO TO TOP
                </button>
            </div>
        </>
    )
}

export default Discuss