import React from 'react'
import Grid from './Grid'
import Pagination from './Pagination'

function Content(props) {
    return (
        <div className='contentContainer'>
            <Grid showResults={props.showResults} />
            <Pagination
                pageCount={props.pageCount}
                pageChange={props.pageChange}
            />
        </div>
    )
}

export default Content
