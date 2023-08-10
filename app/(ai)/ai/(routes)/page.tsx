 
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    const session = useSession()
    if(session.status==="loading"){
        return <div>Loading...</div>
    }
    if(session.status==="unauthenticated"){
        redirect("/")
    }
  return (
    <div>page</div>
  )
}

export default page