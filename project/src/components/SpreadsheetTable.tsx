import React from 'react';
import { SpreadsheetData } from '../types/spreadsheet';
import StatusBadge from './StatusBadge';
import UserAvatar from './UserAvatar';

interface SpreadsheetTableProps {
  data: SpreadsheetData[];
}

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({ data }) => {
  const columns = [
    { key: 'jobRequest', label: 'Job Request', width: 'w-80' },
    { key: 'submitted', label: 'Submitted', width: 'w-24' },
    { key: 'status', label: 'Status', width: 'w-28' },
    { key: 'subscriber', label: 'Subscriber', width: 'w-32' },
    { key: 'job', label: 'Job', width: 'w-32' },
    { key: 'assigned', label: 'Assigned', width: 'w-32' },
    { key: 'priority', label: 'Priority', width: 'w-24' },
    { key: 'dueDate', label: 'Due Date', width: 'w-24' },
    { key: 'estValue', label: 'Est. Value', width: 'w-24' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
          <tr>
            <th className="w-12 px-4 py-3 text-left">
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
            {columns.map((column) => (
              <th 
                key={column.key} 
                className={`${column.width} px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-4">
                <input type="checkbox" className="rounded border-gray-300" />
              </td>
              <td className="px-4 py-4 text-sm text-gray-900">
                {row.jobRequest}
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">
                {row.submitted}
              </td>
              <td className="px-4 py-4">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-4 text-sm text-gray-900">
                {row.subscriber}
              </td>
              <td className="px-4 py-4 text-sm text-blue-600 hover:text-blue-800">
                <a href="#" className="hover:underline">{row.job}</a>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center space-x-2">
                  <UserAvatar name={row.assigned} />
                  <span className="text-sm text-gray-900">{row.assigned}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className={`text-sm font-medium ${getPriorityColor(row.priority)}`}>
                  {row.priority}
                </span>
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">
                {row.dueDate}
              </td>
              <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                ${row.estValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;