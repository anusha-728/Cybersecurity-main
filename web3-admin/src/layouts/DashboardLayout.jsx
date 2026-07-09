import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

const DashboardLayout = ({ setIsAuthenticated, darkMode, setDarkMode }) => {
  return (
    <div className="flex h-screen w-full bg-[#0B1220] overflow-hidden">
      
      {/* Sidebar is fixed on the left */}
      <Sidebar setIsAuthenticated={setIsAuthenticated} />
      
      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Scrollable Page Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0B1220]">
          <Outlet />
        </main>
      </div>
      
    </div>
  );
};

export default DashboardLayout;