import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sidebar } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarAi from "./sidebarAi";

const MobileSidebarAi = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Button className="md:hidden" variant="ghost" size="icon">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                    <SidebarAi/>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileSidebarAi;
