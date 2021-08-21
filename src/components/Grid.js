import React from 'react'
import GridItem from './GridItem'

function Grid(props) {
    return (
        <div className='gridContainer'>
            <GridItem showResults={props.showResults}/>
        </div>
    )
}

export default Grid
