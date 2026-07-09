const AttackTable = ({ attacks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead>
          <tr className="text-[#94A3B8] border-b border-[#111827]">
            <th className="pb-3">Timestamp</th>
            <th className="pb-3">Vector</th>
            <th className="pb-3">Source IP</th>
            <th className="pb-3">Target</th>
            <th className="pb-3">Action Taken</th>
          </tr>
        </thead>
        <tbody className="text-[#F8FAFC]">
          {attacks.map((attack, i) => (
            <tr key={i} className="border-b border-[#111827] hover:bg-[#0B1220]">
              <td className="py-3 text-[#94A3B8]">{attack.time}</td>
              <td className="py-3 text-[#EF4444] font-medium">{attack.vector}</td>
              <td className="py-3 font-mono text-xs">{attack.ip}</td>
              <td className="py-3 text-[#2563EB]">{attack.target}</td>
              <td className="py-3">
                <span className="bg-[#EF4444]/20 text-[#EF4444] px-2 py-1 rounded text-xs">{attack.action}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttackTable;