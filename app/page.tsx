import Image from "next/image";
import Students from '../components/Students'

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/student', {
    cache: 'no-store'
  })
  if (res.ok) {
    return res.json()
  }
}

export default async function Home() {
  const students = await getData()
  return (
    <main className="flex flex-col justify-center items-center h-[500px]">

      {students.map((student: any) => (
          <Students key={student.id} id={student.id} name={student.fullname} phone={student.phone} />
        ))
      }

    </main>
  );
}
