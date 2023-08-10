import { serverAuth } from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    try {

        const { currentUser } = await serverAuth();
      
        return NextResponse.json(currentUser);

    } catch (error) {

        return NextResponse.json("Not signed in", { status: 404 })
    }

     

}