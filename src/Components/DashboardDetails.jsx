import React from 'react'
import { MdArticle,MdShoppingBasket,MdAttachMoney,MdPaid } from "react-icons/md";
function DashboardDetails() {
  return (
    <div className='flex h-16 px-4  py-5 gap-4 w-full '>
        <BoxWrapper>
        <div><MdArticle className=" text-2xl gap-2 text-black"/>
        </div>
          <span> 
            Pooja Booking
          </span>
          <strong className="px-4 text-blue-500">123</strong>
        </BoxWrapper>
        <BoxWrapper>
          <div><MdShoppingBasket className=" text-2xl gap-3 text-black"/>
          </div>
          <span className="px-1">
            Stock Details
          </span>
          <strong className="px-4 text-yellow-500">123</strong>
        </BoxWrapper>
        <BoxWrapper>
        <div><MdAttachMoney className=" text-2xl gap-3 text-black"/>
          </div>
          <span>
            Total Income
          </span>
          <strong className="px-4 text-green-500">123</strong>
        </BoxWrapper>
        <BoxWrapper>
        <div><MdPaid className=" text-2xl gap-3 text-black"/>
          </div>
          <span className="px-1">
           Total Expense
          </span>
          <strong className="px-4 text-red-500">123</strong>
        </BoxWrapper>
    </div>
  )
}

export default DashboardDetails

function BoxWrapper({children}) {
  return <div><button className="bg-white rounded-sm p-4 flex-1 border border-gray-500 flex items-center hover:bg-neutral-300 cursor-pointer ">{children}</button></div>
}