"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import usecurrentUser from "@/hooks/useCurrentUser"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "react-hot-toast"
import { useSession } from "next-auth/react"
import { Skeleton } from "@/components/ui/skeleton"
import { redirect } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        title: z.string().min(2, {
          message: "Link title must be at least 2 characters.",
        }).max(30, {
          message: "Link title must not be longer than 30 characters.",
        }),
        value: z.string().url({ message: "Please enter a valid URL." }),

      })
    )
    .optional(),
})



// This can come from your database or API.


export function ProfileForm() {
  const [Loading, setLoading] = useState(false)

  const session = useSession()
  if (session.status === "unauthenticated") {
    redirect("/")
  }

  const user = session.data?.user
   
  const {data:currentUser, error, isLoading }= usecurrentUser()
  
  
   
   

  
  

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: currentUser?.name || user?.name || "",
      username: currentUser?.username as string || "steve",
      bio:currentUser?.bio || ""
    },

    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    try {
      setLoading(true);

      await axios.post("/api/register", values);


      toast.success("Registered");

    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }

  }



  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {session.status != "loading" ? <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" id="name"  {...field} />
                </FormControl>
                <FormDescription>
                  This will be shown on your profile, Name can be changed anytime
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> : <Skeleton className="full h-[50px]" />}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your unique Username" disabled={currentUser} {...field} />
                </FormControl>
                <FormDescription>
                  This will be used to visit your profile through URL, Username should be unique
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {session.status != "loading" ? <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={user?.email as string}>{user?.email}</SelectItem>

                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage verified email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> :
            <Skeleton className="full h-[50px]" />
          }
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    id="bio"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div>Social media links</div>
            {fields.map((field, index) => (
              <div key={field.id} className={cn(index !== 0 && "mt-4")}>
                <FormField
                  control={form.control}

                  name={`urls.${index}.title`}

                  render={({ field }) => (
                    <FormItem>


                      <FormControl>
                        <Input className="my-1" placeholder="Link title" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />


                <FormField
                  control={form.control}
                  name={`urls.${index}.value`}

                  render={({ field }) => (
                    <FormItem>


                      <FormControl>
                        <Input className="my-1" placeholder="URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <FormDescription>
              These social media links will be used just to show on profile.
            </FormDescription>



            <div className="flex">
              <Button
                disabled={isLoading}
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append({ title: "", value: "" })}
              >
                Link social media
              </Button>

            </div>
          </div>
          <Button disabled={Loading || session.status === "loading"} type="submit">Update profile</Button>
        </form>
      </Form>

    </>
  )
}