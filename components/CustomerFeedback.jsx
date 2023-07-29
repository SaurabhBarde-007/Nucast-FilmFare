import React, { useState } from "react";
import Link from "next/link";
import CustomerCard from "./CustomerCard";

const CustomerFeedback = () => {
  return (
    <>
        <div className="w-[100vw] h-auto px-[20px] sm:px-[40px] py-[60px] bg-black flex flex-col justify-center items-start gap-[40px]">
            <div className="text-[30px] w-[97%] flex justify-between ">
                <h1>Hear what our customer say :&#41;</h1>

                <div className="w-auto h-auto flex justify-center items-center gap-[10px] ">
                  <button className="text-[#] text-[#FFA800] border-[#FFA800] border-[1.5px] px-[12px] py-[2px] sm:px-[16px] sm:py-[4px] rounded-md ">&lt;</button>
                  <button className="text-[#] text-[#FFA800] border-[#FFA800] border-[1.5px] px-[12px] py-[2px] sm:px-[16px] sm:py-[4px] rounded-md ">&gt;</button>    
                </div>
            </div>
            <div className="w-[100%] flex justify-start items-start gap-[25px] overflow-hidden">
                <CustomerCard
                  title="Brooklyn Simmons"
                  subtitle="manam"
                  src={"./1.png"}
                  content="Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci."
                />
                <CustomerCard
                  title="Esther Howard"
                  subtitle="Offmax"
                  src={"./2.png"}
                  content="Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit."
                />
                <CustomerCard
                  title="Arlene McCoy"
                  subtitle="bloopixel"
                  src={"./3.png"}
                  content="Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est."
                />
                <CustomerCard
                  title="Jane Cooper"
                  subtitle="unpexel"
                  src={"./4.png"}
                  content="Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. "
                />
               
                
              
            </div>
        </div>
    
    </>
  )
}

export default CustomerFeedback