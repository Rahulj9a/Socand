"use client"
import React, { ReactComponentElement, ReactElement, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
 
import HomeSidebar from "./homeSideBar";

 
const MobileSidebarHome  = ( ) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Button className="md:hidden" variant="ghost" size="icon">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                     <HomeSidebar/>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileSidebarHome;
