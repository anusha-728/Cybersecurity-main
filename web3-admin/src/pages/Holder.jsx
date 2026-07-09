const Holder = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-[#F8FAFC]">Holder Wallet</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Information */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Identity Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">DID</p>
                <p className="text-xs text-[#2563EB] bg-[#0B1220] p-2 rounded break-all">did:ethr:0x4f...9a1b</p>
              </div>
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Public Key</p>
                <p className="text-xs text-[#F8FAFC] bg-[#0B1220] p-2 rounded break-all">0x04a8b...19c2d</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <button className="w-full py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded transition-colors">
                Generate QR
              </button>
              <button className="w-full py-2 bg-[#111827] border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white rounded transition-colors">
                Backup Wallet
              </button>
            </div>
          </div>
        </div>

        {/* Credential List */}
        <div className="lg:col-span-2 bg-[#1E293B] rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-[#F8FAFC]">Stored Credentials</h3>
            <button className="text-[#2563EB] hover:text-blue-400 text-sm font-medium">Download All</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between items-center p-4 bg-[#0B1220] rounded-lg border border-[#111827] hover:border-[#2563EB] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">🎓</div>
                  <div>
                    <p className="text-[#F8FAFC] font-medium">University Degree</p>
                    <p className="text-xs text-[#94A3B8]">Issued: Oct 12, 2023</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold rounded-full">Valid</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holder;