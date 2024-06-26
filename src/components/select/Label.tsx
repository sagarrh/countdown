import React from 'react'

type Labelprops={
    text:string;
    children:React.ReactNode;
}


const Label:React.FC<Labelprops>=({text,children})=> {
  return (
    <label className='flex flex-col items-start gap-1 text-neutral-300 text-xs font-apple2mono mt-2'>
        {text}
        {children}
    </label>
  )
}

export default Label