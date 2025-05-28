import Header from "~/components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "~/components/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};


export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
                    <Outlet />
                </main>
            </div>
        </div>

    );
}