import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsAuthenticated(true);
      navigate('/');
    }, 800);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-[#1E293B] rounded-xl shadow-2xl border border-[#2563EB]/20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#F8FAFC]">Welcome Back</h2>
        <p className="text-[#94A3B8] mt-2">Admin Portal Authentication</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#94A3B8] mb-1">Admin ID</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-[#0B1220] border border-[#111827] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#F8FAFC]"
            placeholder="Enter your DID or Email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#94A3B8] mb-1">Passkey</label>
          <input
            type="password"
            required
            className="w-full px-4 py-3 bg-[#0B1220] border border-[#111827] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#F8FAFC]"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex justify-center items-center"
        >
          {loading ? 'Authenticating...' : 'Secure Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;