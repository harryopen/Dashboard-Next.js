import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      
      {/* Sidebar Navigation */}
      <aside className="w-full flex-none md:w-64 bg-zinc-900 text-zinc-100 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8 tracking-tight text-white">
            Dashboard
          </h2>
          <nav className="flex flex-col gap-2">
            <Link 
              href="/dashboard" 
              className="px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors"
            >
              Overview
            </Link>
            <Link 
              href="/dashboard/customer" 
              className="px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors"
            >
              Customers
            </Link>
            <Link 
              href="/dashboard/settings" 
              className="px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors"
            >
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Footer/User Info inside Sidebar */}
        <div className="border-t border-zinc-850 pt-4 text-xs text-zinc-400">
          Logged in as Admin
        </div>
      </aside>

      {/* Main Page Content Area */}
      <main className="flex-grow p-6 md:p-12 md:overflow-y-auto">
        {children}
      </main>
      
    </div>
  );
}
