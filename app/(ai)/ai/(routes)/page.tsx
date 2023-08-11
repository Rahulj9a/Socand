"use client";
import SocandIcon from "@/components/logos/SocandIcon";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color:"bg-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/ai/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color:"bg-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/ai/imagegen",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color:"bg-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/ai/videogen",
  },
  {
    label: "Music Generation",
    icon: Music,
    color:"bg-emerald-700",
    bgColor: "bg-emerald-700/10",
    href: "/ai/musicgen",
  },
  {
    label: "Code generation",
    icon: Code,
    color:"bg-green-700",
    bgColor: "bg-green-700/10",
    href: "/ai/codegen",
  },
   
];

const page = () => {
  const session = useSession();
  if (session.status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <SocandIcon dark spin className="w-20 h-20" />
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    redirect("/");
  }
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Explore the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between cursor-pointer hover:shadow-md transition"
          >
            <div className="flex items-center gap-x-4">
               <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)}/>
                     
               </div>
                <div className="font-semibold">
                    {tool.label}
                </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
