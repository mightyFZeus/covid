import React from 'react'
import { IState } from '../types/type';


interface IStateCard {
    state:IState
}

const StateCard = ({state}:IStateCard) => {
  return (
      <div className='py-4 w-full md:w-[22%] px-10 shadow-xl rounded-lg bg-white mt-10  '>
          <p className=" mt-2 font-semibold text-md "> State : {state.state }</p> 
          <p className=" mt-2 font-semibold text-md "> Discharged : {state.discharged }</p> 
          <p className=" mt-2 font-semibold text-md "> Cases On Admission : {state.casesOnAdmission }</p> 
          <p className=" mt-2 font-semibold text-md "> Cases On Admission : {state.death }</p> 
          
    </div>
  )
}

export default StateCard