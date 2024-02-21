import Link from 'next/link';
import React from 'react'

async function getData(id) {
  const res = await fetch(`http://127.0.0.1:8000/api/student/${id}`, {
    cache: 'no-store'
  })
  if (res.ok) {
    return res.json();

  }
}
const page = async ({ params }) => {
  const { id } = params
  const student = await getData(id)
  console.log(student)
  return (
    <div>
      {student.fullname}

      <div>
        <Link href={'/'}>Back</Link>
      </div>
    </div>
  )
}

export default page