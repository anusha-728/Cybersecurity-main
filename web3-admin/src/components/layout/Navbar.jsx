const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    // Navbar Background: #111827
   // Replace your <header> tag with this one:
<header className="sticky top-0 z-50 flex w-full bg-[#0B1220]/70 backdrop-blur-lg border-b border-[#1E293B] shadow-sm transition-all duration-300">
      <div className="flex flex-1 items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold text-[#F8FAFC] tracking-wide">LOGO</span>
          <div className="relative hidden md:block">
            {/* Search Bar matching theme */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#1E293B] text-[#F8FAFC] placeholder-[#94A3B8] rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-xl">
            🔔
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-xl"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <div className="flex items-center gap-3 cursor-pointer pl-4 border-l border-[#1E293B]">
            {/* Primary Blue: #2563EB */}
            <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-sm font-bold shadow-md">
              AD
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium text-[#F8FAFC]">Admin User</span>
              <span className="text-xs text-[#94A3B8]">Super Admin</span>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;