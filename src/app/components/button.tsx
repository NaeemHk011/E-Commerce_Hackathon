
import React from 'react'



type buttonType = {
    title:string
    style?:string
}
const Button = (prop:buttonType) => {
    const {title,style} = prop
  return (
    <div>
        <button className={`${style} px-10 py-[15px] rounded-[5px]`}>{title}</button>
    </div>
  )
}

export default Button