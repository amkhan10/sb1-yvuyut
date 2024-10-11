import React from 'react';
import { Shield, BarChart2, AlertTriangle, Settings, X, Users, Database, FileText } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, setCurrentPage }) => {
  return (
    <div className={`${open ? 'block' : 'hidden'} lg:block fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <Shield size={32} className="text-blue-500" />
          <span className="ml-2 text-lg font-semibold">WazuhLike</span>
        </div>
        <button onClick={() => setOpen(false)} className="lg:hidden">
          <X size={24} />
        </button>
      </div>
      <nav className="mt-10">
        <a
          className="flex items-center px-6 py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer"
          onClick={() => setCurrentPage('dashboard')}
        >
          <BarChart2 size={20} />
          <span className="mx-3">Overview</span>
        </a>
        <a
          className="flex items-center px-6 py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer"
          onClick={() => setCurrentPage('agents')}
        >
          <Users size={20} />
          <span className="mx-3">Agents</span>
        </a>
        <a
          className="flex items-center px-6 py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer"
          onClick={() => setCurrentPage('events')}
        >
          <Database size={20} />
          <span className="mx-3">Events</span>
        </a>
        <a className="flex items-center px-6 py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer">
          <AlertTriangle size={20} />
          <span className="mx-3">Alerts</span>
        </a>
        <a className="flex items-center px-6 py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer">
          <FileText size={20} />
          <span className="mx-3">Reports</span>
        </a>
        <a className="flex items-center px-6 py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer">
          <Settings size={20} />
          <span className="mx-3">Management</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;