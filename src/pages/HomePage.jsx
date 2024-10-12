import axios from 'axios';
import React, { useState } from 'react'

const HomePage = () => {
    const [file, setFile] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [ErrorMsg, SetError] = useState(false)

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const headleUpload = async (e) => {        
        e.preventDefault()

        try{
            if(!file){
              SetError("Please Choose file")              
            }
            else{
              SetError(null)  
                          
              const formData = new FormData();
              formData.append('syllabus', file);

              const res = await axios.post(import.meta.env.VITE_APP_API + '/FileUpload/NewFile', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
              })

              .then(res => {
                if(res.data.Status === "Success"){
                  alert("File Uploaded Successfull")
                  window.location.reload()
                }
                else{
                  SetError(res.data.Error)
                }
              })
            }


        }
        catch(err){
            console.log(err)
        }

    }

  return (
    <div className='bg-gray-200 min-h-screen'>
        {/* <div className="md:grid grid-cols-3 gap-4 py-[5%]">
            <div className=""></div>
            <div className="bg-white rounded-md p-4 shadow-md">

            </div>
            <div className=""></div>
        </div> */}

        <div className="md:mx-0 mx-4 md:flex justify-between py-[5%]">
            <div className="w-1/2"></div>
            <div className="w-full">
              <div className="bg-white rounded-md p-4 shadow-md ">
                  <h1 className='text-center text-2xl font-semibold text-gray-500'>Lesson Plan Genarator</h1>               
              </div>
              <dlv className="md:flex my-4">
                <div className="bg-white rounded-md p-4 shadow-md w-full md:mr-2">
                    <div className="">
                        {
                           ErrorMsg ? 
                           <div className="bg-red-500/20 mb-4 rounded">
                            <h1 className="text-center text-red-900 font-semibold py-2">{ErrorMsg}</h1>
                          </div>
                          :
                          <div className=""></div>

                        }
                        <form onSubmit={headleUpload} method="post">
                            <h1 className="font-semibold text-gray-500 mb-2">Upload File</h1>
                            <input onChange={handleFileChange} type="file" name="" id="" accept=".pdf" className='w-full bg-gray-200 h-12 rounded file:bg-blue-500 file:border-none file:p-2 file:ml-2 file:my-1 file:rounded file:text-white file:cursor-pointer'/>
                        
                            <button type="submit" className='bg-blue-500 rounded w-full text-white py-2 px-4 mt-8'>Upload File</button>
                        </form>
                        
                    </div>
                </div>
                <div className="bg-white rounded-md p-4 shadow-md w-full md:ml-2 md:mt-0 mt-4"></div>
              </dlv>
            </div>
            <div className="w-1/2"></div>
        </div>
        

        
    </div>
  )
}

export default HomePage