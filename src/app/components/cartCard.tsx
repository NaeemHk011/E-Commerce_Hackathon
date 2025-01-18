import React from 'react'
import Image from 'next/image'
import {FaPlus,FaMinus,FaTrash} from "react-icons/fa"

const CartCard = ({
    src,
    title,
    description,
    price
}:{
    src:string,
    title:string,
    description:string,
    price:number
}) => {
  return (
    <div className='flex p-10'>
        <Image src={src} alt={title} width={100} height={100} className='w-[100px] h-[100px] '/>
        <div className='flex px-5 justify-between items-center w-full'>
            <div><h1 className='text-sm font-semibold line-clamp-1 text-slate-800'>{title}</h1>
            <p className='mt-2 text-sm text-slate-800 font-semibold line-clamp-1'>size:&nbsp;L</p>
            <div className='mt-2 flex items-center'>
            <button className='group hover:bg-white bg-slate-800 text-white hover:text-slate-800 text-xs rounded w-fit h-fit duration-300 '>
                <FaMinus className='h-3 w-5 group-hover:text-slate-800'></FaMinus></button>
                <div className="mr-2 ml-2 scroll-mm-20 text-sm font-semibold tracking-tight text-slate-800">1</div>
            <button className='group hover:bg-white bg-slate-800 text-white hover:text-slate-800 text-xs rounded w-fit h-fit duration-300 '>
                <FaPlus className='h-3 w-5 group-hover:text-slate-800'></FaPlus></button>
                </div>
                <div className='lg:hidden flex flex-col mt-2 gap-2'>
            <h2 className='text-sm font-semibold leading-none line-clamp-1 text-slate-800'><span>Price:&nbsp;</span>&#36;{price}</h2>
           <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
        </div>
            </div>
        </div>

        <div className='hidden lg:flex flex-col items-end gap-5'>
            <h2 className='text-sm font-semibold leading-none line-clamp-1 text-slate-800'><span>Price:&nbsp;</span>&#36;{price}</h2>
           <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
        </div>
        
    </div>
  )
}

export default CartCard