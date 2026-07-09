const LiveLogs = ({ logs }) => {
  return (
    <div className="bg-[#0B1220] p-4 rounded-lg border border-[#111827] h-64 overflow-y-auto font-mono text-xs space-y-2">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-4">
          <span className="text-[#94A3B8] whitespace-nowrap">[{log.time}]</span>
          <span className={`${log.level === 'ERROR' ? 'text-[#EF4444]' : log.level === 'WARN' ? 'text-[#F59E0B]' : 'text-[#22C55E]'}`}>
            {log.level}
          </span>
          <span className="text-[#F8FAFC]">{log.message}</span>
        </div>
      ))}
    </div>
  );
};

export default LiveLogs;