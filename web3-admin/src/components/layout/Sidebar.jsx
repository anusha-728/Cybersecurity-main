import { NavLink } from 'react-router-dom';

const Sidebar = ({ setIsAuthenticated }) => {
  const navItems = [
    { name: 'Dashboard', icon: '🏠', path: '/' },
    { name: 'Holder Wallet', icon: '👤', path: '/holder' },
    { name: 'Issuer Portal', icon: '🏛', path: '/issuer' },
    { name: 'Verifier Portal', icon: '✔', path: '/verifier' },
    { name: 'Security Center', icon: '🛡', path: '/security' },
    { name: 'Audit Logs', icon: '📜', path: '/audit' },
    { name: 'Analytics', icon: '📊', path: '/analytics' },
    { name: 'Admin Profile', icon: '👨', path: '/profile' },
    { name: 'Settings', icon: '⚙', path: '/settings' },
  ];

  return (
    <aside className="w-64 h-full bg-[#111827] flex flex-col border-r border-[#1E293B] shadow-2xl flex-shrink-0 z-40">
      
      {/* Logo Area */}
      <div className="h-[73px] flex items-center justify-center border-b border-[#1E293B]">
        <h1 className="text-xl font-black text-[#F8FAFC] tracking-widest uppercase shadow-blue-500/50 drop-shadow-lg">
          WEB3 ADMIN
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 no-underline ${
                isActive 
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white shadow-lg shadow-blue-900/20' 
                  : 'text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-semibold text-sm tracking-wide">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-[#1E293B]">
        <button
          onClick={() => setIsAuthenticated(false)}
          className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-xl text-[#94A3B8] hover:bg-[#EF4444] hover:text-white transition-all duration-300 shadow-lg"
        >
          <span className="text-lg">🚪</span>
          <span className="font-bold text-sm tracking-wide">Secure Logout</span>
        </button>
      </div>
      
    </aside>
  );
};

export default Sidebar;