'use client'
import React from 'react'
import StudentsList from './StudentsList'
import Link from 'next/link'


const Students = ({ name, phone, id }) => {
    // const deleteStudent = () => {
    //     alert(StudentId)
    // }
    return (
        <div className='border-2 border-blue-600 p-4 rounded-md w-[500px] my-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 capitalize'>
                    <h1>{name}</h1>
                    <h1>{phone}</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <Link href={`/student/${id}`} className='bg-blue-500 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white'>View</Link>
                    </div>
                    <div>
                        <button  className='bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white'>Delete</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Students