import React, { useState } from "react";
import Link from "next/link";
import CustomerCard from "./CustomerCard";

const CustomerFeedback = () => {
  return (
    <>
        <div className="w-[100vw] h-auto px-[40px] py-[40px] bg-black flex flex-col justify-center items-start gap-[20px]">
            <div className="text-[30px]">
                <h1>Hear what our customer say :&#41;</h1>
            </div>
            <div>
                <CustomerCard/>
            </div>
        </div>
    
    </>
  )
}

export default CustomerFeedback