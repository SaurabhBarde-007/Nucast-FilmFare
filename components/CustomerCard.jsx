import React from 'react'

const CustomerCard = (props) => {

    return (
        <>
            <div className='w-[307px] px-[16px] py-[16px] h-auto border-[#fff] border-[1.5px] flex flex-col justify-center items-start gap-[10px] rounded-md'>
                <div className='flex justify-start items-center gap-[10px]'>
                    <div className='rounded-xl w-[56px] h-[56px] '><img className=' object-cover' src="./1.png" alt="user" /></div>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='font-bold text-[17px]'>Brooklyn Simmons</span>
                        <span className='text-[#D9D9D9] text-[17px]'>manam</span>
                    </div>
                </div>
                <div>
                    <p className='whitespace-normal font-light text-[15px]'>
                        Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CustomerCard