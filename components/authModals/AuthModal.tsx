 
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const AuthModal = () => {
  return (
    
       <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                 Login into your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
             <Button onClick={()=>signIn('google')}>
              Login With Goggle
             </Button>
             </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
    </Card>
    
  );
};

export default AuthModal;
