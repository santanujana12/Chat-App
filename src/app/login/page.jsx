'use client';

import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="w-full max-w-md p-10 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 transition-all duration-500 hover:shadow-indigo-500/10">
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg transform rotate-3">
                        <span className="text-white font-black text-3xl">C</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400 font-medium">Log in to your Chat App account</p>
                </div>

                <form className="space-y-6">
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 group-focus-within:text-indigo-400 transition-colors">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all placeholder-slate-600 text-white font-medium shadow-inner"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 group-focus-within:text-indigo-400 transition-colors">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all placeholder-slate-600 text-white font-medium shadow-inner"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <a href="#" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button className="w-full py-4 bg-white text-slate-950 hover:bg-indigo-50 hover:text-indigo-600 font-bold rounded-2xl transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:shadow-indigo-500/20 active:scale-[0.98] transform flex items-center justify-center gap-2">
                        Sign In
                    </button>
                </form>

                <div className="mt-10 pt-8 border-t border-white/5 text-center">
                    <p className="text-slate-400 font-medium">
                        New to Chat App? {' '}
                        <Link href="/sign-up" className="text-white hover:text-indigo-400 font-bold transition-all underline decoration-indigo-500/30 underline-offset-4 hover:decoration-indigo-500">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}