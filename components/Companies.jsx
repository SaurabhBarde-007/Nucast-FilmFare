import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homebg.module.css";
import Floating from "@/components/Floating"


const Companies = () => {
  return (
    <>
        <div className="w-[100vw] h-[544px] flex justify-center items-start relative p-[70px] overflow-hidden bg-black">
            <div className="w-[100%] flex justify-between items-start">
                <div className="w-[45%] flex justify-start items-center whitespace-normal text-[40px] font-semibold ">
                    Trusted by 200+ companies around the world
                </div>
                <div className="w-[45%] flex justify-start items-center whitespace-normal text-[16px] ">
                    Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
                </div>
            </div>
            
            <div className="w-[100vw] absolute flex flex-col justify-center items-center gap-9 top-[270px] overflow-hidden">
                <div className={`flex justify-center gap-5 overflow-hidden w-[100vw] `}>
                    <div className={`flex justify-evenly w-[100vw] ${styles["logosSlide"]}`}>
                        <Floating src="./Frame1.png"/> 
                        <Floating src="./Frame2.png"/> 
                        <Floating src="./Frame3.png"/> 
                        <Floating src="./Frame4.png"/> 
                        <Floating src="./Frame5.png"/> 
                        <Floating src="./Frame6.png"/>   
                    </div>
                    <div className={`flex gap-5 ${styles["logosSlide"]}`}>
                        <Floating src="./Frame1.png"/> 
                        <Floating src="./Frame2.png"/> 
                        <Floating src="./Frame3.png"/> 
                        <Floating src="./Frame4.png"/> 
                        <Floating src="./Frame5.png"/> 
                        <Floating src="./Frame6.png"/> 
                    </div>
                    
                    
                </div>


                <div className="flex gap-10">
                    <Floating src="./Frame7.png"/> 
                    <Floating src="./Frame8.png"/> 
                    <Floating src="./Frame9.png"/> 
                    <Floating src="./Frame10.png"/> 
                    <Floating src="./Frame11.png"/> 
                    <Floating src="./Frame12.png"/> 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Companies