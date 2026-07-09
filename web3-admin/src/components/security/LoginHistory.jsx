const LoginHistory = ({ history }) => {
  return (
    <div className="space-y-4">
      {history.map((log, index) => (
        <div key={index} className="flex justify-between items-center p-4 bg-[#0B1220] rounded-lg border border-[#111827]">
          <div>
            <p className="text-[#F8FAFC] font-medium">{log.device} - {log.browser}</p>
            <p className="text-xs text-[#94A3B8]">{log.location} • {log.ip}</p>
          </div>
          <div className="text-right">
            <span className={`px-2 py-1 rounded text-xs font-bold ${log.status === 'Success' ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
              {log.status}
            </span>
            <p className="text-xs text-[#94A3B8] mt-1">{log.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginHistory;