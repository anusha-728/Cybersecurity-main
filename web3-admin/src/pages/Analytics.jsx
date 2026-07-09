const Analytics = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-[#F8FAFC]">Platform Analytics</h2>
      
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E293B] p-6 rounded-xl border border-[#111827] shadow-lg">
          <h4 className="text-[#94A3B8] text-sm font-medium mb-1">Total Verified Credentials</h4>
          <p className="text-3xl font-bold text-[#F8FAFC]">24,592</p>
          <p className="text-[#22C55E] text-sm mt-2 flex items-center gap-1">
            <span>↑</span> 12.5% from last month
          </p>
        </div>
        <div className="bg-[#1E293B] p-6 rounded-xl border border-[#111827] shadow-lg">
          <h4 className="text-[#94A3B8] text-sm font-medium mb-1">Active Wallets</h4>
          <p className="text-3xl font-bold text-[#F8FAFC]">8,204</p>
          <p className="text-[#22C55E] text-sm mt-2 flex items-center gap-1">
            <span>↑</span> 3.2% from last month
          </p>
        </div>
        <div className="bg-[#1E293B] p-6 rounded-xl border border-[#111827] shadow-lg">
          <h4 className="text-[#94A3B8] text-sm font-medium mb-1">Avg. Verification Time</h4>
          <p className="text-3xl font-bold text-[#F8FAFC]">1.2s</p>
          <p className="text-[#EF4444] text-sm mt-2 flex items-center gap-1">
            <span>↓</span> 0.1s slower than average
          </p>
        </div>
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1E293B] p-6 rounded-xl border border-[#111827] shadow-lg h-80 flex flex-col">
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Issuance vs Verification (30 Days)</h3>
          <div className="flex-1 border-2 border-dashed border-[#111827] rounded-lg flex items-center justify-center">
            <span className="text-[#94A3B8]">Chart Component Placeholder (e.g., Recharts)</span>
          </div>
        </div>
        
        <div className="bg-[#1E293B] p-6 rounded-xl border border-[#111827] shadow-lg h-80 flex flex-col">
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Credential Types Distribution</h3>
          <div className="flex-1 border-2 border-dashed border-[#111827] rounded-lg flex items-center justify-center">
            <span className="text-[#94A3B8]">Pie Chart Component Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;