import React from 'react'


interface IData{
    data: number | undefined;
    text: string;
}

const Card = ({ data, text }: IData) => {
    console.log(data)
  return (
      <div  className=' py-4 px-10 shadow-xl rounded-lg bg-white mt-10  w-full'>
          <p className='font-semibold'>{ text} :</p>
          <p className='mt-10 text-right text-xl font-black'>{ data}</p>
          
         
          
    </div>
  )
}

export default Card