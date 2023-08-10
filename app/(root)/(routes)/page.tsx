"use client";
import { redirect, useRouter } from "next/navigation"
import AuthModal from "@/components/authModals/AuthModal";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import usecurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const session = useSession();
  const router = useRouter()
  const { data: currentUser, isLoading } = usecurrentUser()
  

  return (
    <div className="flex items-center">
      <div className="flex-1"></div>
      {!currentUser ? <div className="fixed m-auto right-0 top-0 w-2/5 h-screen p-5 flex items-center bottom-0">
        {session.status == "loading" ? skeltonStruct : <AuthModal />}
      </div> : ""}
    </div>
  );
}


const skeltonStruct = (
  <div className="w-3/5 h-44 ">
    <Skeleton className="w-full m-4 h-10" />
    <Skeleton className="w-full m-4 h-10" />
    <Skeleton className="w-full m-4 h-10" />
  </div>
);
