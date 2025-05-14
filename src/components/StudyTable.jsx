import React, { useEffect, useState } from 'react';
import { fetchStudies } from '../services/api'; // Adjust path if needed

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

const ITEMS_PER_PAGE = 10;

const StudyTable = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchStudies()
      .then((data) => {
        console.log('Raw study data:', data);
  
        const parsed = Array.isArray(data)
          ? data
          : Array.isArray(data?.studies)
          ? data.studies
          : Array.isArray(data?.data)
          ? data.data
          : [];
  
        if (parsed.length > 0) {
          console.log('First study object:', parsed[0]); // 👈 add this
        }
  
        setStudies(parsed);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  

  const totalPages = Math.ceil(studies.length / ITEMS_PER_PAGE);
  const paginatedStudies = studies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pt-2 px-6 pb-6">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-x-auto">
        {loading ? (
          <div className="p-4 text-gray-500">Loading studies...</div>
        ) : error ? (
          <div className="p-4 text-red-500">Error: {error.message}</div>
        ) : (
          <>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 text-xs uppercase text-gray-500 tracking-wider">
                  <th className="p-4 font-semibold text-left">Study Name</th>
                  <th className="p-4 font-semibold text-left">Start Date</th>
                  <th className="p-4 font-semibold text-left">End Date</th>
                  <th className="p-4 font-semibold text-left">Status</th>
                  <th className="p-4 font-semibold text-left">Tags</th>
                  <th className="p-4 font-semibold text-left">Participants</th>
                </tr>
              </thead>
              <tbody>
                {paginatedStudies.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-4 text-center text-gray-500">
                      No studies found.
                    </td>
                  </tr>
                ) : (
                  paginatedStudies.map((study, index) => (
                    <tr
                      key={study.id || index}
                      className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-150 hover:shadow-sm"
                    >
                      <td className="p-4 font-medium text-gray-900">{study.study_name}</td>
                      <td className="p-4 text-gray-700">{study.start_date || '-'}</td>
                      <td className="p-4 text-gray-700">{study.end_date || '-'}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            study.status
                          )}`}
                        >
                          {study.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {(study.tags || []).map((tag, tagIdx) => (
                            <span
                              key={`tag-${study.id || index}-${tagIdx}`}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-gray-800">{study.participants || 0}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between p-4 border-t border-gray-100 text-sm">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudyTable;
