import React from 'react';
import { Shield, BarChart2, AlertTriangle, Settings, Menu, Users, ShoppingBag, Search, Bell } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Agents from './components/Agents';
import Events from './components/Events';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'agents':
        return <Agents />;
      case 'events':
        return <Events />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <button
                className="text-gray-500 focus:outline-none focus:text-gray-600 lg:hidden mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">
                {currentPage === 'dashboard' ? 'Security Dashboard' : 
                 currentPage === 'agents' ? 'Agents' :
                 currentPage === 'events' ? 'Security Events' : ''}
              </h1>
            </div>
            <div className="flex items-center">
              <div className="relative mx-4">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600 mr-4">
                <Bell size={24} />
              </button>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <Settings size={24} />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;