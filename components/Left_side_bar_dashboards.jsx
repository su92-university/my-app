'use client'
import React, { useState } from 'react'

export default function LeftSideBarDashboards() {
    const option = ['Dashboard', 'Managment'];
    const [activeOption, setActiveOption] = useState('Dashboard');
  return (
    <div className='sticky top-0 h-screen flex-shrink-0'>
        <div className='bg-white h-full w-60 p-4 flex flex-col justify-between shadow-lg'>
            <div>
                {
                    option.map((item,index)=>(
                        <div 
                            className={`py-3 px-4 text-black rounded-lg mb-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white hover:translate-x-1 hover:shadow-md ${activeOption === item ? 'bg-blue-500 text-white shadow-md translate-x-1' : ''}`} 
                            key={index} 
                            onClick={() => setActiveOption(item)}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
            <div>
                <div className='py-3 px-4 text-black rounded-lg mb-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white hover:translate-x-1 hover:shadow-md'>Help</div>
                <div className='py-3 px-4 text-red-600 rounded-lg mb-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:translate-x-1 hover:shadow-md'>Log Out</div>
            </div>
        </div>
    </div>
  )
}
