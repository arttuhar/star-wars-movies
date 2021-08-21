import React from 'react'
import GridItem from './GridItem'
import Pagination from './Pagination'

function Container(props) {
    return (
        <div>
            <div className='container'>
                <div className='content'>
                    <div className='contentContainer'>
                        <GridItem showResults={props.showResults} />
                        <div className='paginationLinks'>
                            <Pagination
                                pageCount={props.pageCount}
                                pageChange={props.pageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
