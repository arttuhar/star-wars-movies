import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination(props) {


    return (
        <div className='pagination'>
            <ReactPaginate
                previousLabel={'Previous page'}
                nextLabel={'Next page'}
                pageCount={props.pageCount}
                onPageChange={props.pageChange}
                pageRangeDisplayed={0}
                marginPagesDisplayed={0}
                breakLabel={''}

                containerClassName={'paginationContainer'}
                previousLinkClassName={'paginationPrevious'}
                previousClassName={'previous'}
                nextLinkClassName={'paginationNext'}
                nextClassName={'next'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>
    )
}

export default Pagination
