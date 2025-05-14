import React, { useEffect, useState } from 'react';
import { fetchStudies } from '../services/api';

const ITEMS_PER_PAGE = 10;

const StudyTable = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchStudies()
      .then((response) => {
        let extracted = [];
        if (Array.isArray(response)) extracted = response;
        else if (response?.studies) extracted = response.studies;
        else if (response?.data) extracted = response.data;
        else if (response?.results) extracted = response.results;
        else {
          const guess = Object.values(response).find(val => Array.isArray(val));
          if (guess) extracted = guess;
        }
        setStudies(extracted);
      })
      .catch((err) => setError(err))
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
                  <th className="p-4 font-semibold text-left">Category</th>
                  <th className="p-4 font-semibold text-left">Participants</th>
                  <th className="p-4 font-semibold text-left">Status</th>
                  <th className="p-4 font-semibold text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedStudies.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">
                      No studies found.
                    </td>
                  </tr>
                ) : (
                  paginatedStudies.map((study, index) => (
                    <tr
                      key={study.id || index}
                      className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-150"
                    >
                      <td className="p-4 text-blue-600 hover:underline cursor-pointer">
                        {study.study_name || study.name || study.title || '—'}
                      </td>
                      <td className="p-4 text-gray-700">
                        {(study.tags || []).join(', ') || '—'}
                      </td>
                      <td className="p-4 font-medium text-gray-900">
                        {study.participants || study.participantCount || 0}
                      </td>
                      <td className="p-4 text-gray-700">
                        {study.status || '—'}
                      </td>
                      <td className="p-4">
                        <span className="text-blue-600 hover:underline cursor-pointer">View</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {studies.length > 0 && (
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
                  Page {currentPage} of {totalPages || 1}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`px-3 py-1 rounded border ${
                    currentPage === totalPages || totalPages === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudyTable;
