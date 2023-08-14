import { redirect } from 'next/navigation';



import { serverAuth } from '@/lib/serverAuth';
import HomeSidebar from '@/components/sideBars/homeSideBar';
import Navbar from '@/components/navbars/navbarAi';

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
        <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y- z-[80] bg-gray-900">
            <HomeSidebar/>
        </div>
        <main className="md:pl-72">
            <Navbar />
            {children}
        </main>
    </div>
    );
};