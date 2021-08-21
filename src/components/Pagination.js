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
            />
        </div>
    )
}

export default Pagination
