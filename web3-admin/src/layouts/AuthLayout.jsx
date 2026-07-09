import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B1220] p-4">
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;