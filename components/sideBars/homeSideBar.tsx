"use client";

import { cn } from "@/lib/utils";
import {
    Activity,
    BrainCircuit,
  Code,
  Edit,
  Home,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
    color: "text-violet-500",
  },
  {
    label: "Analytics",
    icon: Activity,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Edit content",
    icon: Edit,
    href: "/edit",
    color: "text-pink-700",
  },
  {
    label: "AI",
    icon: BrainCircuit,
    href: "/edit",
    color: "text-indigo-700",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/setting",
  },
];

const HomeSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <div className="relative w-1/2 h-auto mr-4  pl-3 mb-4 bg-">
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
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 ${
                pathname === route.href
                  ? " text-white  bg-white/10"
                  : "text-zinc-400 hover:"
              } rounded-lg transition`}
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

export default HomeSidebar;
