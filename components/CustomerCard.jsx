import React from 'react'

const CustomerCard = (props) => {

    return (
        <>
            <div className='w-[307px] px-[16px] py-[16px] h-auto border-[#fff] border-[1.5px]'>
                <div>
                    <div className='rounded-xl w-[56px] h-[56px] '><img className=' object-cover' src="./1.png" alt="user" /></div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div>
                    <p className='whitespace-normal'>
                        Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CustomerCard