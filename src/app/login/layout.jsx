'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function layout({children}) {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <div>
        {
            pathName !== '/login/logincollege'?
            <ul>
            <li>
                <Link href='/login'>Main Login</Link>
            </li>
            <li>
                <Link href='/login/login-student'>Login Student</Link>
            </li>
            <li>
                <Link href='/login/login-college'>Login College</Link>
            </li>
        </ul>:""
        }
        {children}
    </div>
  )
}

export default layout