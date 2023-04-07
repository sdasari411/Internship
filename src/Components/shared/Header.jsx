import React from 'react'
import { GrSearch } from "react-icons/gr";


export default function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200" >
        <div className="relative">
            <GrSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
            <input type="text" placeholder="Search..." 
            className=" text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray rounded-sm px-9 pl-11 pr-4"
            />
        </div>
        <div>Side Buttons</div>
        </div>
  )
}
