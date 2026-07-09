const Issuer = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-[#F8FAFC]">Issuer Portal</h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Issue Form */}
        <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg xl:col-span-1 h-fit">
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Issue Credential</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#94A3B8] mb-1">Student DID</label>
              <input type="text" className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#22C55E] focus:outline-none" placeholder="did:ethr:..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#94A3B8] mb-1">Credential Type</label>
              <select className="w-full px-4 py-2 bg-[#0B1220] border border-[#111827] rounded-lg text-[#F8FAFC] focus:ring-2 focus:ring-[#22C55E] focus:outline-none">
                <option>Academic Degree</option>
                <option>Employment Record</option>
                <option>Identity Proof</option>
              </select>
            </div>
            <button className="w-full py-3 bg-[#22C55E] hover:bg-green-600 text-white font-bold rounded-lg transition-colors mt-4">
              Sign & Issue Credential
            </button>
          </form>
        </div>

        {/* History Table */}
        <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg xl:col-span-2 overflow-hidden">
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Issued Credentials Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#111827] text-[#94A3B8] text-sm">
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Recipient DID</th>
                  <th className="pb-3 font-medium">Date Issued</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="border-b border-[#111827] hover:bg-[#0B1220] transition-colors">
                    <td className="py-4 text-[#F8FAFC]">Academic Degree</td>
                    <td className="py-4 text-[#2563EB] font-mono text-xs">did:ethr:0x89...3c</td>
                    <td className="py-4 text-[#94A3B8]">Today, 10:20 AM</td>
                    <td className="py-4"><span className="text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded text-xs">Active</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issuer;