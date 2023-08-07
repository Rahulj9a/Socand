import { redirect } from 'next/navigation';


import prismadb from '@/lib/prismadb';

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode
}) {






    return (
        <>
            {children}
        </>
    );
};