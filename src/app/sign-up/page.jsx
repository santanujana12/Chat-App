'use client';

import Link from 'next/link';

export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[140px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[140px] animate-pulse delay-1000"></div>

            <div className="w-full max-w-md p-10 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 transition-all duration-500 hover:shadow-purple-500/10">
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg transform -rotate-3">
                        <span className="text-white font-black text-3xl">C</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
                        Create Account
                    </h1>
                    <p className="text-slate-400 font-medium">Join the next generation of chatting</p>
                </div>

                <form className="space-y-6">
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder-slate-600 text-white font-medium shadow-inner"
                            placeholder="johndoe"
                        />
                    </div>
                     <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder-slate-600 text-white font-medium shadow-inner"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder-slate-600 text-white font-medium shadow-inner"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder-slate-600 text-white font-medium shadow-inner"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-purple-500/40 active:scale-[0.98] transform flex items-center justify-center gap-2 mt-4">
                        Get Started
                    </button>
                </form>

                <div className="mt-10 pt-8 border-t border-white/5 text-center">
                    <p className="text-slate-400 font-medium">
                        Already have an account? {' '}
                        <Link href="/login" className="text-white hover:text-purple-400 font-bold transition-all underline decoration-purple-500/30 underline-offset-4 hover:decoration-purple-500">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}