"use client";
import * as z from "zod";
import { formSchema } from "./constant";
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import SocandIcon from "@/components/logos/SocandIcon";

const ConversationPage = () => {

  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  
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
      <Heading
        title="Conversation"
        description="Our most advance conversation model"
        Icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg w-full border p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <FormField name="prompt" render={({field})=>(
                 <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                        <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent" disabled={isLoading} placeholder="How a satellite is launched" {...field}/>
                    </FormControl>

                 </FormItem>
            )}/>
            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                Generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConversationPage;
