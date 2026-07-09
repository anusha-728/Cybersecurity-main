const Profile = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-[#F8FAFC]">Admin Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Identity Card */}
        <div className="lg:col-span-1 bg-[#1E293B] rounded-xl border border-[#111827] shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-[#2563EB] flex items-center justify-center text-4xl text-white font-bold mb-4 shadow-lg border-4 border-[#0B1220]">
            AD
          </div>
          <h3 className="text-xl font-bold text-[#F8FAFC]">Admin User</h3>
          <p className="text-[#2563EB] font-medium mb-4">Super Administrator</p>
          
          <div className="w-full pt-4 border-t border-[#111827] text-left space-y-3 mt-2">
            <div>
              <p className="text-xs text-[#94A3B8] uppercase">Email</p>
              <p className="text-[#F8FAFC]">admin@web3portal.com</p>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] uppercase">Department</p>
              <p className="text-[#F8FAFC]">IT Security & Infrastructure</p>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] uppercase">Last Login</p>
              <p className="text-[#F8FAFC]">Today, 08:30 AM (IP: 192.168.1.1)</p>
            </div>
          </div>
        </div>

        {/* Right Column: Settings & Sessions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1E293B] rounded-xl border border-[#111827] shadow-lg p-6">
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Active Sessions</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-[#0B1220] rounded-lg border border-[#22C55E]/30">
                <div>
                  <p className="text-[#F8FAFC] font-medium">MacBook Pro - Chrome</p>
                  <p className="text-xs text-[#94A3B8]">San Francisco, CA • Current Session</p>
                </div>
                <span className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold rounded-full">Active</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#0B1220] rounded-lg border border-[#111827]">
                <div>
                  <p className="text-[#F8FAFC] font-medium">iPhone 14 - Safari</p>
                  <p className="text-xs text-[#94A3B8]">San Francisco, CA • 2 hours ago</p>
                </div>
                <button className="text-[#EF4444] text-sm hover:underline">Revoke</button>
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] rounded-xl border border-[#111827] shadow-lg p-6">
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Security Settings</h3>
            <form className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#2563EB]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#2563EB]" />
              </div>
              <button className="py-2 px-6 bg-[#2563EB] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mt-2">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;