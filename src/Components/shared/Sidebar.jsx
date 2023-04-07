
import React from 'react'
import { FcGenericSortingAsc } from "react-icons/fc";
import { Link } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
import { GrLogout } from "react-icons/gr";
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const linkClasses='flex items-center gap-2 px-3 py-2 hover:bg-neutral-200 hover:no-underline active:bg-neutral-400 rounded-sm text-base'

export default function Sidebar() {
  return  <div className=' flex bg-blue-200 w-70 p-3  flex-col text-black'>
    <div className='flex items-center gap-2 px-1 py-3'>
   < FcGenericSortingAsc fontSize={30}/>
   <span className='text-black text-3xl text-bold'>Dashboard</span>
    </div>

    <div className='flex-1 py-8 flex flex-col gap-0.5 '>
    {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
      <SidebarLink key={item.key} item={item}/>
    ))}
  </div>
  <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-500'>
    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
      <SidebarLink key={item.key} item={item}/>
    ))}
    <div className={classNames('text-red-700 cursor-pointer',linkClasses)}>
      <span className="text-xl"><GrLogout/></span>
      Logout
      </div>
    </div>
  </div>
  
}

function SidebarLink({item}) {
  const {pathname}  = useLocation() 
  return (
  
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-400 text-black':'',linkClasses)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  
  )
  
}
  
