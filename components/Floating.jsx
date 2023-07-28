import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homebg.module.css";

const floating = (props) => {
    const {src} = props;

  return (
    <>
        <div className="w-[150px] px-[16px] py-[12px] bg-black border-[#fff] border-[1px] rounded-xl flex justify-center items-center flex-shrink-0">
            <img src={src} className="w-[120px] object-cover"/>
        </div>
    </>
  )
}

export default floating