const AuditLogs = () => {
  const logs = [
    { id: 1, date: '2023-10-25', user: 'Admin-01', action: 'Issue Credential', result: 'Success', ip: '192.168.1.45', browser: 'Chrome', os: 'macOS', time: '14:32:01' },
    { id: 2, date: '2023-10-25', user: 'System', action: 'Block Fake DID', result: 'Blocked', ip: '45.22.11.90', browser: 'Unknown', os: 'Linux', time: '11:40:22' },
    { id: 3, date: '2023-10-24', user: 'Admin-02', action: 'Update Policy', result: 'Success', ip: '192.168.1.88', browser: 'Firefox', os: 'Windows 11', time: '09:15:44' },
    { id: 4, date: '2023-10-24', user: 'User-77', action: 'Login Attempt', result: 'Failed', ip: '10.0.0.42', browser: 'Safari', os: 'iOS', time: '08:05:10' },
  ];

  return (
    <div className="p-8 space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#F8FAFC]">System Audit Logs</h2>
          <p className="text-[#94A3B8] mt-1">Comprehensive record of all administrative and system actions.</p>
        </div>
        <button className="px-4 py-2 bg-[#1E293B] border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white rounded-lg transition-colors flex items-center gap-2">
          <span>⬇️</span> Export CSV
        </button>
      </div>

      <div className="bg-[#1E293B] rounded-xl shadow-lg border border-[#111827] flex-1 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-[#111827] flex gap-4">
          <input 
            type="text" 
            placeholder="Search logs..." 
            className="flex-1 bg-[#0B1220] border border-[#111827] text-[#F8FAFC] px-4 py-2 rounded-lg focus:outline-none focus:border-[#2563EB]"
          />
          <input 
            type="date" 
            className="bg-[#0B1220] border border-[#111827] text-[#F8FAFC] px-4 py-2 rounded-lg focus:outline-none focus:border-[#2563EB] [color-scheme:dark]"
          />
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#0B1220] sticky top-0">
              <tr className="text-[#94A3B8]">
                <th className="p-4 font-medium">Timestamp</th>
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Action</th>
                <th className="p-4 font-medium">Result</th>
                <th className="p-4 font-medium">IP Address</th>
                <th className="p-4 font-medium">Browser / OS</th>
              </tr>
            </thead>
            <tbody className="text-[#F8FAFC] divide-y divide-[#111827]">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-[#0B1220]/50 transition-colors">
                  <td className="p-4">
                    <div>{log.date}</div>
                    <div className="text-xs text-[#94A3B8]">{log.time}</div>
                  </td>
                  <td className="p-4 font-medium">{log.user}</td>
                  <td className="p-4">{log.action}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      log.result === 'Success' ? 'bg-[#22C55E]/20 text-[#22C55E]' : 
                      log.result === 'Blocked' ? 'bg-[#EF4444]/20 text-[#EF4444]' : 
                      'bg-[#F59E0B]/20 text-[#F59E0B]'
                    }`}>
                      {log.result}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-xs text-[#94A3B8]">{log.ip}</td>
                  <td className="p-4">
                    <div>{log.browser}</div>
                    <div className="text-xs text-[#94A3B8]">{log.os}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;