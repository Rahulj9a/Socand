 
import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
 

import axios from "axios"
import { Button } from '../ui/button'
import { signIn, useSession } from 'next-auth/react'
const Register = () => {
  const [isLoading, setisLoading] = useState(false)
  

   

  return (
    <Card >
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Don't have an account yet, Let's create it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button disabled={isLoading} onClick={()=>signIn('google')}>Register with Goggle</Button>
      </CardContent>
      {/* <CardFooter>
        <Button>Save password</Button>
      </CardFooter> */}
    </Card>
  )
}

export default Register