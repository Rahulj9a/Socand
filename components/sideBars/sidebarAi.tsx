"use client";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, SettingsIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarAi = () => {
    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/ai",
            color: "text-sky-500",
        },
        {
            label: "Conversation",
            icon: MessageSquare,
            href: "/ai/conversation",
            color: "text-violet-500",
        },
        {
            label: "Image Generation",
            icon: ImageIcon,
            href: "/ai/imagegen",
            color: "text-pink-700",
        },
        {
            label: "Video Generation",
            icon: VideoIcon,
            href: "/ai/videogen",
            color: "text-orange-700",
        },
        {
            label: "Music Generation",
            icon: Music,
            href: "/ai/musicgen",
            color: "text-emerald-500",
        },
        {
            label: "Code Generation",
            icon: Code,
            href: "/ai/codegen",
            color: "text-green-700",
        },
        {
            label: "Settings",
            icon: SettingsIcon,
            href: "/ai/setting",

        },
    ];
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827]">
            <div className="px-3 py-2 flex-1">
                <div className="relative w-1/2 h-auto mr-4  pl-3 mb-4 ">
                    <Link href="/home">
                        <Image
                            alt="Logo"
                            src="/logo.png"
                            className="w-full h-auto"
                            width={500}
                            height={500}
                        />
                    </Link>
                </div>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex text-center items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SidebarAi;
