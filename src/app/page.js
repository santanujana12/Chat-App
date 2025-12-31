export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
        Dashboard
      </h1>
      <p className="text-gray-400 text-lg max-w-md">
        Welcome to your personal chat dashboard. This area is protected and only accessible when you are logged in.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-colors group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">Total Messages</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">Active Chats</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
}