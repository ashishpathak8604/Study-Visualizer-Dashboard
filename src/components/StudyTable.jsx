import React from 'react';

const mockData = [
  {
    name: 'Cardiovascular Health Study',
    start: '2024-01-15',
    end: '2024-06-30',
    status: 'Active',
    tags: ['Clinical', 'Heart', 'Long-term'],
    participants: 245,
  },
  {
    name: 'Mental Health Assessment',
    start: '2024-02-01',
    end: '2024-04-30',
    status: 'On Hold',
    tags: ['Psychology', 'Survey'],
    participants: 180,
  },
  {
    name: 'Diabetes Prevention Program',
    start: '2023-12-01',
    end: '2024-03-15',
    status: 'Completed',
    tags: ['Clinical', 'Diabetes'],
    participants: 320,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-700';
    case 'On Hold':
      return 'bg-yellow-100 text-yellow-700';
    case 'Completed':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const StudyTable = () => {
  return (
    <div className="pt-2 px-6 pb-6">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-xs uppercase text-gray-500 tracking-wider">
              <th className="p-4 font-semibold">Study Name</th>
              <th className="p-4 font-semibold">Start Date</th>
              <th className="p-4 font-semibold">End Date</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Tags</th>
              <th className="p-4 font-semibold">Participants</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((study, index) => (
              <tr
                key={index}
                className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-150 hover:shadow-sm"
              >
                <td className="p-4 font-medium text-gray-900">{study.name}</td>
                <td className="p-4 text-gray-700">{study.start}</td>
                <td className="p-4 text-gray-700">{study.end}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(study.status)}`}>
                    {study.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 font-semibold text-gray-800">{study.participants}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyTable;
