import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    
  try {
    const { email, name, username, bio, urls } = await req.json();
    const urlsArray = urls || [];
    console.log(email,name, username,bio,urls)
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        username,
        bio,
        urls:{
            create:urlsArray
        }
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error)
    return new NextResponse("internalError", { status: 500 });
  }
}
