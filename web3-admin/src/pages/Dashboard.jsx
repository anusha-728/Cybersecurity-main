import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const portals = [
    {
      title: 'Holder Wallet',
      stats: ['DID Created', 'Credentials : 8'],
      path: '/holder',
      color: 'bg-[#2563EB]'
    },
    {
      title: 'Issuer Portal',
      stats: ['Credentials : 21', 'Issued Today : 4'],
      path: '/issuer',
      color: 'bg-[#22C55E]'
    },
    {
      title: 'Verifier Portal',
      stats: ['Pending : 5', 'Verified : 112'],
      path: '/verifier',
      color: 'bg-[#F59E0B]'
    }
  ];

  const liveActivities = [
    { time: '10:20', event: 'Credential Issued', type: 'success' },
    { time: '10:35', event: 'Wallet Created', type: 'info' },
    { time: '11:00', event: 'QR Verified', type: 'success' },
    { time: '11:25', event: 'Failed Login', type: 'danger' },
    { time: '11:40', event: 'Fake DID Blocked', type: 'danger' }
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#F8FAFC]">Welcome Admin</h1>
        <p className="text-[#94A3B8] mt-1">System Overview & Quick Actions</p>
      </div>

      {/* Portal Cards */}
      {/* Enhanced Portal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portals.map((portal) => (
          <div 
            key={portal.title} 
            className="group relative bg-[#1E293B] rounded-xl p-6 border border-[#1E293B] flex flex-col justify-between h-48 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/50 overflow-hidden cursor-pointer"
          >
            {/* Hidden gradient background that fades in on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#2563EB] transition-colors">{portal.title}</h3>
              <ul className="space-y-2 text-[#94A3B8]">
                {portal.stats.map((stat, idx) => <li key={idx}>• {stat}</li>)}
              </ul>
            </div>
            
            <button 
              onClick={() => navigate(portal.path)}
              className="relative z-10 text-left text-[#F8FAFC] font-medium group-hover:text-[#2563EB] transition-colors flex items-center mt-4"
            >
              Open <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Security Statistics */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-[#111827] shadow-lg">
          <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">Security Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-[#0B1220] rounded-lg border border-[#22C55E]/30">
              <span className="text-[#94A3B8]">Threat Level</span>
              <span className="text-[#22C55E] font-bold">LOW</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#0B1220] rounded-lg">
              <span className="text-[#94A3B8]">Total Attacks</span>
              <span className="text-[#F8FAFC] font-medium">3</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#0B1220] rounded-lg">
              <span className="text-[#94A3B8]">Failed Logins</span>
              <span className="text-[#F8FAFC] font-medium">12</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#0B1220] rounded-lg">
              <span className="text-[#94A3B8]">Active Sessions</span>
              <span className="text-[#F8FAFC] font-medium">18</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#0B1220] rounded-lg border border-[#EF4444]/30">
              <span className="text-[#94A3B8]">Replay Attacks</span>
              <span className="text-[#EF4444] font-bold">1</span>
            </div>
          </div>
        </div>

        {/* Live Activity */}
   {/* Enhanced Live Activity */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-[#111827] shadow-lg">
          <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">Live Activities</h3>
          <div className="space-y-4">
            {liveActivities.map((activity, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-3 hover:bg-[#0B1220] rounded-lg transition-colors border-l-4 ${
                  activity.type === 'danger' ? 'border-[#EF4444] animate-pulse bg-[#EF4444]/5' : 
                  activity.type === 'success' ? 'border-[#22C55E]' : 
                  'border-[#2563EB]'
                }`}
              >
                <span className="text-[#94A3B8] font-mono text-sm w-12">{activity.time}</span>
                <span className={`${activity.type === 'danger' ? 'text-[#EF4444] font-medium' : 'text-[#F8FAFC]'}`}>
                  {activity.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;