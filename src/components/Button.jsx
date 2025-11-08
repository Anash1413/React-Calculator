import React from 'react'

const Button = (props) => {
  return (
    <div 
    onClick={() => props.handelNumber(props.value)}
     className='bg-[#222121] select-none cursor-pointer text-white flex items-center justify-center text-3xl rounded-3xl active:scale-90 duration-200 h-[85%] w-[21%]'>
      {props.value}
    </div>
  ) 
}

export default Button
