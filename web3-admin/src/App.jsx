import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* Base Background: #0B1220, Main Text: #F8FAFC */}
      <div className="min-h-screen bg-[#0B1220] text-[#F8FAFC] font-sans selection:bg-[#2563EB] selection:text-white">
        <Router>
          <AppRoutes 
            isAuthenticated={isAuthenticated} 
            setIsAuthenticated={setIsAuthenticated} 
            darkMode={darkMode}
            setDarkMode={setDarkMode} 
          />
        </Router>
      </div>
    </div>
  );
}

export default App;