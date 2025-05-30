import React, { useState } from 'react'

export default function SwitchTest() {

  const [isLeft, setIsLeft] = useState<boolean>(true);

  return (
    <div className='w-full h-full justify-center items-center'>
      <button onClick={() => setIsLeft(!isLeft)}>SWITCH</button>
      <div className={`w-[30px] h-[30px] bg-red-500 rounded-full flex justify-center items-center
      relative left-[0px] transition-all duration-500 ease-in-out' 
      transform transition-transform duration-1000 ease-in-out
          ${isLeft ? 'translate-x-7' : 'translate-x-0'}`}>
      </div>
    </div>
  )
}
