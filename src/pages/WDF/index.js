import React from 'react'
import Laundry from '../../assets/autri-taheri-xoVylccwsN8-unsplash.jpg'

const WDF = () => {
  return (
    <div className="container w-10/12 mx-auto mt-28 rounded-t-lg p-4 bg-primary ">
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <div className="px-10">
          <p className="font-montserrat font-thin mb-7 tracking-wider">DO YOUR LAUNDRY IN TEN MINUTES</p>
          <p className="font-montserrat text-5xl text-blue">Freedom from</p>
          <p className="font-montserrat text-5xl text-blue">Laundry Day.</p>
          <p className="font-montserrat mt-7 text-xl">Five minutes to drop off,</p>
          <p className="font-montserrat text-xl">Five minutes to pick up</p>
        </div>
        <div>
          <img className="rounded-full" src={Laundry} alt="girl reclining in laundry basket"/>
        </div>
      </div>
    </div>
  )
}

export default WDF
