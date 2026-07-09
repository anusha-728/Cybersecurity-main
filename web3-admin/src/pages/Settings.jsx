const Settings = () => {
  return (
    <div className="p-8 max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#F8FAFC]">System Settings</h2>
        <p className="text-[#94A3B8] mt-1">Manage application preferences and global configurations.</p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-[#1E293B] rounded-xl shadow-lg border border-[#111827] overflow-hidden">
          <div className="p-6 border-b border-[#111827]">
            <h3 className="text-lg font-bold text-[#F8FAFC]">General Configuration</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#F8FAFC] font-medium">Maintenance Mode</p>
                <p className="text-sm text-[#94A3B8]">Disable access to all non-admin users.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#0B1220] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#94A3B8] peer-checked:after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EF4444]"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#F8FAFC] font-medium">Enable Strict Security Logs</p>
                <p className="text-sm text-[#94A3B8]">Log every single API request to the database.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-[#0B1220] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#94A3B8] peer-checked:after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2563EB]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Network Configurations */}
        <div className="bg-[#1E293B] rounded-xl shadow-lg border border-[#111827] overflow-hidden">
          <div className="p-6 border-b border-[#111827]">
            <h3 className="text-lg font-bold text-[#F8FAFC]">Web3 Network Settings</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#94A3B8] mb-1">Primary RPC Node</label>
              <input 
                type="text" 
                defaultValue="https://mainnet.infura.io/v3/YOUR-PROJECT-ID"
                className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#2563EB]" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#94A3B8] mb-1">DID Registry Contract Address</label>
              <input 
                type="text" 
                defaultValue="0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"
                className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] font-mono text-sm focus:outline-none focus:border-[#2563EB]" 
              />
            </div>
            <div className="pt-4">
              <button className="px-6 py-2 bg-[#22C55E] hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
                Save Configurations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;