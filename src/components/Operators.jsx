import React from 'react'

const Operators = (props) => {
  return (
   <div
    //  onClick={() => props.handelNumber(props.value)}
      onClick={() => props.handelOperators(props.value)}
    className={` bg-[#222121] select-none cursor-pointer text-orange-600 flex items-center justify-center text-6xl pb-3 rounded-3xl active:scale-90 duration-200 h-[85%] w-[21%]`}>
      {props.value}
    </div>
  )
}

export default Operators
