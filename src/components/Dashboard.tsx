import React from 'react';
import { BarChart2, Shield, AlertTriangle, Activity, Users, Database } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <DashboardCard title="Total Agents" value="156" icon={<Users size={24} className="text-blue-500" />} />
        <DashboardCard title="Active Agents" value="142" icon={<Shield size={24} className="text-green-500" />} />
        <DashboardCard title="Disconnected Agents" value="14" icon={<AlertTriangle size={24} className="text-yellow-500" />} />
        <DashboardCard title="Total Events" value="1,234,567" icon={<Database size={24} className="text-purple-500" />} />
        <DashboardCard title="Alerts (24h)" value="156" icon={<AlertTriangle size={24} className="text-red-500" />} />
        <DashboardCard title="System Load" value="23%" icon={<Activity size={24} className="text-indigo-500" />} />
      </div>
      
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Security Events</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <EventRow time="2023-04-15 14:32:01" event="Authentication failure" agent="web-001" source="192.168.1.100" level="High" />
            <EventRow time="2023-04-15 14:30:45" event="File integrity changed" agent="db-002" source="/etc/passwd" level="Medium" />
            <EventRow time="2023-04-15 14:28:30" event="New user created" agent="admin-003" source="admin panel" level="Low" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-lg font-semibold text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

const EventRow: React.FC<{ time: string; event: string; agent: string; source: string; level: string }> = ({ time, event, agent, source, level }) => {
  const levelColor = level === 'High' ? 'text-red-600' : level === 'Medium' ? 'text-yellow-600' : 'text-green-600';
  
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{time}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{source}</td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${levelColor}`}>{level}</td>
    </tr>
  );
};

export default Dashboard;