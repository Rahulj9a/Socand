 

import { serverAuth } from "@/lib/serverAuth";
import Navbar from "@/components/navbars/navbarAi";
import Sidebar from "@/components/sideBars/sidebarAi";
 
import NavbarAi from "@/components/navbars/navbarAi";
import SidebarAi from "@/components/sideBars/sidebarAi";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
   const {currentUser} = await serverAuth()

   if(!currentUser){
    redirect("/")
   }
    

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y- z-[80] bg-gray-900">
                <SidebarAi  />
            </div>
            <main className="md:pl-72">
                <NavbarAi />
                {children}
            </main>
        </div>
    );
}
