import React, { useState } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  ip: string;
  status: 'active' | 'disconnected';
  os: string;
  version: string;
  lastKeepAlive: string;
}

const mockAgents: Agent[] = [
  { id: '001', name: 'Web Server', ip: '192.168.1.100', status: 'active', os: 'Ubuntu 20.04', version: '4.2.0', lastKeepAlive: '2023-04-15 15:30:00' },
  { id: '002', name: 'Database Server', ip: '192.168.1.101', status: 'active', os: 'CentOS 8', version: '4.2.0', lastKeepAlive: '2023-04-15 15:29:00' },
  { id: '003', name: 'File Server', ip: '192.168.1.102', status: 'disconnected', os: 'Windows Server 2019', version: '4.1.5', lastKeepAlive: '2023-04-15 10:15:00' },
];

const Agents: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Agents</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Keep Alive</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockAgents.map((agent) => (
              <tr key={agent.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agent.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.ip}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {agent.status === 'active' ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle size={16} className="mr-1" /> Active
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <XCircle size={16} className="mr-1" /> Disconnected
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.os}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.version}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.lastKeepAlive}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setSelectedAgent(agent)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAgent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <Info className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Details</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  <strong>Name:</strong> {selectedAgent.name}<br />
                  <strong>IP:</strong> {selectedAgent.ip}<br />
                  <strong>Status:</strong> {selectedAgent.status}<br />
                  <strong>OS:</strong> {selectedAgent.os}<br />
                  <strong>Version:</strong> {selectedAgent.version}<br />
                  <strong>Last Keep Alive:</strong> {selectedAgent.lastKeepAlive}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={() => setSelectedAgent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agents;