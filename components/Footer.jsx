import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <div className="w-[100vw] bg-black px-[40px] py-[40px] pb-0 flex flex-col justify-center items-center">
            <div className="w-[100%] flex-col-reverse sm:flex-row flex justify-between gap-[30px] sm:gap-[100px] lg:px-[100px]">

                <div className="flex justify-start items-start gap-[50px] flex-wrap">
                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <span>Company</span>
                        <span className="text-[#999999]">About us</span>
                        <span className="text-[#999999]">Team</span>
                        <span className="text-[#999999]">Careers</span>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <span>Services</span>
                        <span className="text-[#999999]">Branding</span>
                        <span className="text-[#999999]">Web development</span>
                        <span className="text-[#999999]">Digital marketing</span>
                        <span className="text-[#999999]">Mobile app</span>
                        <span className="text-[#999999]">SEO</span>
                        <span className="text-[#999999]">User testing</span>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <span>Resources</span>
                        <span className="text-[#999999]">Blog</span>
                        <span className="text-[#999999]">Case study</span>
                        <span className="text-[#999999]">Testimonials</span>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-[10px]">
                        <span>Follow us</span>
                        <span className="text-[#999999]">Instagram</span>
                        <span className="text-[#999999]">Figma</span>
                    </div>
                </div>
                <div className="sm:w-[300px] flex flex-col justify-start items-start gap-[20px]">
                    <div className="flex justify-center content-center w-[180px]">
                        <img src="./Logo.png" className=" object-contain "/>
                    </div>
                    <span className="text-[#999999]">Get latest updates</span>
                     <input type="email" className="flex self-start rounded-[100px] py-[8px] px-[12px] sm:py-[12px] sm:px-[16px] bg-black border-[#fff] border-[1.5px] w-[100%]" placeholder="Email"/>
                </div>

            </div>
            <div className="w-[100%] bg-black p-[20px] flex justify-center items-center">
                Created by Shadient.co
            </div>
        </div>
    </>
  )
}

export default Footer