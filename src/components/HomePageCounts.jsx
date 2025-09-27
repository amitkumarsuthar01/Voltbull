import React from 'react'
import { FaBatteryFull, FaHandshake, FaTools, FaUsers } from 'react-icons/fa'

const HomePageCounts = () => {
  return (
    <div className='bg-gray-300 p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <FaUsers className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-6xl font-extrabold'>10000</h1><span className='text-4xl font-bold'>+</span>
                </div>
                <p className='text-lg font-normal'>Happy Customers</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <FaTools className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-6xl font-extrabold'>150</h1><span className='text-4xl font-bold'>+</span>
                </div>
                <p className='text-lg font-normal'>Service Centers</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <FaBatteryFull className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-6xl font-extrabold'>8</h1><span className='text-4xl font-bold'>+</span>
                </div>
                <p className='text-lg font-normal'>Types Of Bike Batteries</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <FaHandshake className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-6xl font-extrabold'>120</h1><span className='text-4xl font-bold'>+</span>
                </div>
                <p className='text-lg font-normal'>Trusted Retailers</p>
            </div>
        </div>

    </div>
  )
}

export default HomePageCounts