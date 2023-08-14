import { redirect } from 'next/navigation';


import prismadb from '@/lib/prismadb';
import axios from 'axios';
import { serverAuth } from '@/lib/serverAuth';


export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const {currentUser} = await serverAuth()
    
    if(currentUser){
        redirect('/home')
    }


    return (
        <>
            {children}
        </>
    );
};