import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

const LessonPlan = () => {
    const {id} = useParams()
    const printRef = useRef();

    const [OneLessonData, SetOneLessonData] = useState({})

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + `/FileUpload/OneLessonData/${id}`)
        .then(res => {
            SetOneLessonData(res.data.Result)
        })        
    })
    
    const handlePrint = () => {
        const printWindow = window.open('', '_blank'); // Open a new window
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Lesson Plan</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { width: 100%; border-collapse: collapse; }
                        th, td { border: 1px solid #ddd; padding: 8px; }
                        th { background-color: #f2f2f2; }
                        .header { font-weight: bold; margin-bottom: 10px; }
                        .flex { display: flex; justify-content: space-between; }
                        .w-full { width: 100%; }
                    </style>
                </head>
                <body>
                    <div>${printRef.current.innerHTML}</div>
                </body>
            </html>
        `);
        printWindow.document.close(); 
        printWindow.print(); 
    };

  return (
    <div className='bg-gray-200 min-h-screen py-24'>
        <div className="bg-white md:mx-24 py-12 px-8" ref={printRef}>
            <div className="flex justify-between">
                <div className="">
                    <p className=""><span className='font-semibold'>University Name</span> : ABC University</p>
                    <p className=""><span className='font-semibold'>Lesson</span> : {OneLessonData.title}</p>
                </div>
                <div className="">
                    {OneLessonData._id}
                    <p className="font-semibold">Computer Generated Lesson Plan</p>
                    <p className="">{new Date().toLocaleString()}</p>
                </div>
            </div>

            <hr className='mt-4'/>

            <div className="my-4" >
                <table className='w-full'>
                    <thead className='bg-gray-200 h-16'>
                        <tr>
                            <th className='w-1/2'>Component</th>
                            <th className='border-l border-gray-300'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Lesson Title</td>
                            <td className='pl-2 border-l border-gray-300'>{OneLessonData.title}</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Lesson Subtitle</td>
                            <td className='pl-2 border-l border-gray-300'>{OneLessonData.subtitle}</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Lesson Content</td>
                            <td className='pl-2 border-l border-gray-300'>{OneLessonData.content}</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Time or days for completion</td>
                            <td className='pl-2 border-l border-gray-300'>{OneLessonData.timeDaysForCompletion}</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Teching Standards</td>
                            <td className='pl-2 border-l border-gray-300'>{OneLessonData.techStandards}</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Objectives of the Lesson</td>
                            <td className='pl-2 border-l border-gray-300'>
                                {OneLessonData.objectives && OneLessonData.objectives.map((objective, index) => (
                                    <p className="">{objective}</p>
                                ))}
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Curriculum Integrations</td>
                            <td className='pl-2 border-l border-gray-300'>
                                {OneLessonData.curriculumIntegration && OneLessonData.curriculumIntegration.map((curriculumIntegrations, index) => (
                                    <li className="">{curriculumIntegrations}</li>
                                ))}
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Lesson Sequences</td>
                            <td className='pl-2 border-l border-gray-300'>
                                {OneLessonData.sequence && 
                                    Object.entries(OneLessonData.sequence).map(([key, value], index) => (
                                        <div key={index} className='py-2'>
                                            <span className="font-semibold capitalize">{key}:</span> {value}
                                        </div>
                                    ))
                                }
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-300 h-16 border border-gray-300'>
                            <td className='pl-2 font-semibold'>Lesson Accommodation</td>
                            <td className='pl-2 border-l border-gray-300'>
                                {OneLessonData.accommodations && OneLessonData.accommodations.map((accommodation, index) => (
                                    <li className="">{accommodation}</li>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <button className='bg-blue-500 text-white rounded py-2 px-4 mt-4 mx-24' onClick={handlePrint}>
            Print
        </button>
    </div>
  )
}

export default LessonPlan