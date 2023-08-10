import { redirect } from 'next/navigation';



import { serverAuth } from '@/lib/serverAuth';

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { currentUser } = await serverAuth()
    if (!currentUser) {
        redirect("/")
    }
    return (
        <>
            {children}
        </>
    );
};