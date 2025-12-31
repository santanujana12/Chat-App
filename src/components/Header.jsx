'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleLogout = () => {
        // In a real app, you would clear the cookie here
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-slate-950/50 backdrop-blur-xl border-b border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl shadow-indigo-500/20 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-black text-2xl leading-none">C</span>
                </div>
                <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-200">
                    Chat App
                </span>
            </div>

            <nav className="flex items-center gap-8">
                <Link
                    href="/login"
                    className="text-gray-400 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
                >
                    Login
                </Link>
                <Link
                    href="/sign-up"
                    className="px-6 py-2.5 bg-white text-slate-950 hover:bg-indigo-50 hover:text-indigo-600 rounded-full transition-all duration-300 shadow-xl shadow-white/10 active:scale-95 text-sm font-bold tracking-tight"
                >
                    Sign Up
                </Link>
                <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-400 transition-colors duration-200 text-xs font-semibold uppercase tracking-widest"
                >
                    Logout
                </button>
            </nav>
        </header>
    );
}
