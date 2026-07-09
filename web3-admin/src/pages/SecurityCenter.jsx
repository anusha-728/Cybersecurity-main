const SecurityCenter = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-[#F8FAFC]">Security Center</h2>
          <p className="text-[#EF4444] mt-1 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping"></span>
            Real-time Threat Monitoring Active
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#94A3B8]">Overall Risk Score</p>
          <p className="text-3xl font-bold text-[#22C55E]">12<span className="text-sm text-[#94A3B8] font-normal">/100</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Cards */}
        {[
          { title: 'Blocked Attacks', count: '14', color: 'text-[#EF4444]' },
          { title: 'Failed Login Attempts', count: '42', color: 'text-[#F59E0B]' },
          { title: 'Replay Attacks', count: '2', color: 'text-[#EF4444]' },
          { title: 'Fake DID Detection', count: '7', color: 'text-[#2563EB]' }
        ].map((metric) => (
          <div key={metric.title} className="bg-[#1E293B] p-5 rounded-xl border border-[#111827] shadow-lg">
            <h4 className="text-[#94A3B8] text-sm font-medium mb-2">{metric.title}</h4>
            <p className={`text-3xl font-bold ${metric.color}`}>{metric.count}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#111827] mt-8">
        <h3 className="text-lg font-bold text-[#F8FAFC] mb-4">Detailed Incident Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-[#94A3B8] border-b border-[#111827]">
                <th className="pb-3">Timestamp</th>
                <th className="pb-3">Incident Type</th>
                <th className="pb-3">Device / Browser</th>
                <th className="pb-3">IP Address</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-[#F8FAFC]">
              <tr className="border-b border-[#111827] hover:bg-[#0B1220]">
                <td className="py-3 text-[#94A3B8]">11:40:22 AM</td>
                <td className="py-3 text-[#EF4444] font-medium">Fake DID Attempt</td>
                <td className="py-3">Chrome / MacOS</td>
                <td className="py-3 font-mono text-xs">192.168.1.105</td>
                <td className="py-3">New York, US</td>
                <td className="py-3"><span className="bg-[#EF4444]/20 text-[#EF4444] px-2 py-1 rounded text-xs">Blocked</span></td>
              </tr>
              <tr className="border-b border-[#111827] hover:bg-[#0B1220]">
                <td className="py-3 text-[#94A3B8]">11:25:01 AM</td>
                <td className="py-3 text-[#F59E0B] font-medium">Failed Login</td>
                <td className="py-3">Safari / iOS</td>
                <td className="py-3 font-mono text-xs">10.0.0.42</td>
                <td className="py-3">London, UK</td>
                <td className="py-3"><span className="bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-1 rounded text-xs">Warning</span></td>
              </tr>
              <tr className="border-b border-[#111827] hover:bg-[#0B1220]">
                <td className="py-3 text-[#94A3B8]">10:05:14 AM</td>
                <td className="py-3 text-[#EF4444] font-medium">Credential Tampering</td>
                <td className="py-3">Firefox / Linux</td>
                <td className="py-3 font-mono text-xs">172.16.254.1</td>
                <td className="py-3">Berlin, DE</td>
                <td className="py-3"><span className="bg-[#EF4444]/20 text-[#EF4444] px-2 py-1 rounded text-xs">Blocked</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;