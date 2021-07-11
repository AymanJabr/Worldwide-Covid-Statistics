import PropTypes from 'prop-types';
import React from 'react';

function Pagination({pageNumber, goToPreviousPage, goToNextPage}) {
    return (
        <div className="Pagination">
            <a href="#" class={`previousButton ${pageNumber > 0 ? '':'ninja'}`}>&laquo; Previous</a>
            <a href="#" class="nextButton">Next &raquo;</a>
        </div>
    );
}

Pagination.propTypes = {
    pageNumber: PropTypes.number,
};

Pagination.defaultProps = {
    pageNumber: 0,
};

export default Pagination;
