import React, { useState } from "react";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="w-[100vw] h-[84px] fixed bg-[#26262693] backdrop-blur-md z-50 flex justify-between items-center overflow-hidden">
        <div className="flex justify-center content-center w-[180px] ml-10">
          <img src="./Logo.png" className=" object-contain "/>
        </div>
        <div className="sm:flex justify-center items-center hidden w-auto gap-7 mr-10">
          <Link href={"/"} className="text-[16px] flex justify-center items-center gap-1">Company <AiFillCaretDown className='w-[18px] h-[18px]'/></Link>
          <Link className="text-[16px]" href={"/"}>Services</Link>
          <Link className="text-[16px]" href={"/"}>Resources</Link>
          <button className="border-[#FFA800] border-[2px] text-[#FFA800] text-[16px] rounded-[100px] px-[16px] py-[10px]">CONTACT</button>
        </div>

        <button className="flex sm:hidden flex-col mr-10" onClick={()=>{
          setIsActive(!isActive);
        }}>
          <span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
          </span>

          {isActive && 
           <div className="absolute bg-[#26262693] backdrop-blur-md left-2 flex justify-center items-center flex-col rounded-xl top-[98px] z-30 w-[95vw] h-[85vh] gap-10">
              <Link href={"/"} className="text-[20px] flex justify-center items-center gap-1">Company <AiFillCaretDown className='w-[18px] h-[18px]'/></Link>
              <Link className="text-[20px]" href={"/"}>Services</Link>
              <Link className="text-[20px]" href={"/"}>Resources</Link>
              <button className="border-[#FFA800] border-[2px] text-[#FFA800] text-[20px] rounded-[100px] px-[16px] py-[10px]">CONTACT</button>
           </div>
          }
        </button>
      </nav>
    </>
  );
};

export default Navbar;
