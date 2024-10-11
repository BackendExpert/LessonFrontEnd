import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
        {/* <div className="md:grid grid-cols-3 gap-4 py-[5%]">
            <div className=""></div>
            <div className="bg-white rounded-md p-4 shadow-md">

            </div>
            <div className=""></div>
        </div> */}

        <div className="flex justify-between py-[5%]">
            <div className="w-1/2"></div>
            <div className="bg-white rounded-md p-4 shadow-md w-full">
                <h1 className='text-center text-2xl font-semibold text-gray-500'>Lesson Plan Genarator</h1>
            </div>
            <div className="w-1/2"></div>
        </div>
    </div>
  )
}

export default HomePage