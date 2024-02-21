"use client"
import React, { useState } from 'react'

const page = () => {
    const [formData, setFormData] = useState({name:'', phone:'', studentClass:''})

    const handleChange = (e){
        setFormData({...formData, [e.target.value]: e.target.value});
    }
   
    const hanleSubmit

    return (
        <div className='w-[30%] mx-auto flex flex-col justify-center my-10'>
            <div className='flex flex-col'>
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Full name' className=' border-2 border-blue-600 outline-none my-1 rounded-sm px-4 py-2'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Phone</label>
                <input type="text" name='phone' placeholder='Phone' className=' border-2 border-blue-600 outline-none my-1 rounded-sm px-4 py-2'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Class</label>
                <input type="text" name='studentClass' placeholder='Class' className=' border-2 border-blue-600 outline-none my-1 rounded-sm px-4 py-2'/>
            </div>
            <button onClick={submitStudent}  className='bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white my-2'>Delete</button>
        </div>
    )
}

export default page