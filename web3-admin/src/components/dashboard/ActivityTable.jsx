const ActivityTable = ({ activities }) => {
  return (
    <div className="bg-[#1E293B] rounded-xl p-6 border border-[#111827] shadow-lg">
      <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Recent Activity</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-[#94A3B8] border-b border-[#111827]">
              <th className="pb-3">Action</th>
              <th className="pb-3">User/DID</th>
              <th className="pb-3">Time</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
        <tbody className="text-[#F8FAFC]">
            {activities.map((act, index) => (
              <tr 
                key={index} 
                className="group border-b border-[#111827] hover:bg-[#1E293B] transition-all duration-300 cursor-pointer"
              >
                <td className="py-4 pl-4 font-medium group-hover:text-[#2563EB] transition-colors">{act.action}</td>
                <td className="py-4 text-[#2563EB] font-mono text-xs">{act.did}</td>
                <td className="py-4 text-[#94A3B8]">{act.time}</td>
                <td className="py-4 pr-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 group-hover:shadow-lg ${act.status === 'Success' ? 'bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E]/20' : 'bg-[#F59E0B]/10 text-[#F59E0B] group-hover:bg-[#F59E0B]/20'}`}>
                    {act.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;