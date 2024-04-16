'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
useRouter
export default function Home() {
  function handleClick(){
      alert('said hello')
  }

  const router = useRouter()

  const navigate = (name) =>{
    router.push(name)
  }
  const InnerComponent = () =>{
    return (
      <div>
        <h1>I am inner Component</h1>
        <Link href="/login">Go to login page</Link>
        <button onClick={()=>navigate('/login')}>Login</button>
        <button onClick={()=>navigate('/about')}>About</button>
      </div>
  )
  }
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <button type="submit" onClick={handleClick}>Click me</button>
      <InnerComponent/>
    </main>
  );
}
