import React, { useState } from "react";
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import usecurrentUser from "@/hooks/useCurrentUser";
import { redirect  } from "next/navigation";
import { serverAuth } from "@/lib/serverAuth";

interface AvatarModalProps {
   

}

const AvatarModal:React.FC<AvatarModalProps> = async( ) => {
 
  
  const { currentUser } = await serverAuth()
   
  
  if(!currentUser || !currentUser.username){
    redirect("/")
  }
   
  
 
  
  return (
    <div>
      
      <Avatar className="cursor-pointer p-1  flex items-center justify-center" >
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback className="bg-black text-white text-lg">{currentUser.profileImage || currentUser.username[0] }</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarModal;