import React, { useState, useEffect } from 'react';
import './pagination.scss';

export const Pagination = ({ data, itemsPerPage = 9, onPageItemsChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    onPageItemsChange(currentItems);
  }, [currentPage, data, itemsPerPage, onPageItemsChange]);

  const handlePageChange = pageNumber => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; {/* "<" */}
      </button>
      {pages.map(page => (
        <button
          key={page}
          className={`pagination__button ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination__button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt; {/* ">" */}
      </button>
    </div>
  );
};
