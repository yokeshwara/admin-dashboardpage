import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
      
        className="pagination-btn"
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`pagination-page ${currentPage === index - 1 ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}
      

      <button
        onClick={() => onPageChange(currentPage + 1)}
       
        className="pagination-btn2"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
