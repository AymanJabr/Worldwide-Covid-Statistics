import PropTypes from 'prop-types';
import React from 'react';

function Pagination({
  totalPages, pageNumber, goToPreviousPage, goToNextPage,
}) {
  return (
    <div className="Pagination">
      <button type="button" onClick={goToPreviousPage} className={`paginationButton ${pageNumber > 0 ? '' : 'ninja'}`}>&laquo; Previous Page</button>
      <button type="button" onClick={goToNextPage} className={`paginationButton ${pageNumber > totalPages - 1 ? 'ninja' : ''}`}>Next Page &raquo;</button>
    </div>
  );
}

Pagination.propTypes = {
  goToPreviousPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  pageNumber: PropTypes.number,
  totalPages: PropTypes.number.isRequired,

};

Pagination.defaultProps = {
  pageNumber: 0,
};

export default Pagination;
