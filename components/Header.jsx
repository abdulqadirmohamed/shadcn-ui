import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-[60%] mx-auto flex justify-center gap-6 mt-10'>
        <Link href={'/'}>Home</Link>
        <Link href={'/create'}>Create</Link>
    </div>
  )
}

export default Header