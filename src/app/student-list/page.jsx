import React from 'react'
import Link from 'next/link'
const StudentList = () => {
  return (
    <div>StudentList
        <ul>
            <li><Link href='/student-list/1'>Anil</Link></li>
            <li><Link href='/student-list/2'>Sunny</Link></li>
            <li><Link href='/student-list/3'>Sony</Link></li>
            <li><Link href='/student-list/4'>Sood</Link></li>
        </ul>
    </div>
  )
}

export default StudentList