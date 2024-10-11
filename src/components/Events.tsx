import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Event {
  id: string;
  timestamp: string;
  level: 'Low' | 'Medium' | 'High';
  description: string;
  source: string;
  agent: string;
}

const mockEvents: Event[] = [
  { id: '1', timestamp: '2023-04-15 15:30:00', level: 'High', description: 'Failed login attempt', source: '192.168.1.100', agent: 'web-001' },
  { id: '2', timestamp: '2023-04-15 15:29:00', level: 'Medium', description: 'File integrity alert', source: '/etc/passwd', agent: 'db-002' },
  { id: '3', timestamp: '2023-04-15 15:28:00', level: 'Low', description: 'System update', source: 'System', agent: 'admin-003' },
];

const Events: React.FC = () => {
  const [events] = useState<Event[]>(mockEvents);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">Security Events</h2>
      
      <div className="mb-6 flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2 h-6 w-6 text-gray-400" />
        </div>
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <Filter className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.timestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    event.level === 'High' ? 'bg-red-100 text-red-800' :
                    event.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.level}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.source}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;