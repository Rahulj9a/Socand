import { redirect } from 'next/navigation';



import { serverAuth } from '@/lib/serverAuth';

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