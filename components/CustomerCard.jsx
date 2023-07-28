import React from 'react'

const CustomerCard = ({title,subtitle,src,content}) => {

    return (
        <>
            <div className='w-[307px] px-[16px] py-[16px] h-auto border-[#fff] border-[1.5px] flex flex-col justify-center items-start gap-[10px] rounded-md flex-shrink-0'>
                <div className='flex justify-start items-center gap-[10px]'>
                    <div className='rounded-xl w-[52px] h-[52px] '><img className=' object-cover' src={src} alt="user" /></div>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='font-bold text-[17px]'>{title}</span>
                        <span className='text-[#D9D9D9] text-[17px]'>{subtitle}</span>
                    </div>
                </div>
                <div>
                    <p className='whitespace-normal font-light text-[15px]'>
                       {content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CustomerCard