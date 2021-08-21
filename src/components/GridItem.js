import React from 'react';

function GridItem(props) {
    return (
        <div className='gridItem'>
            {props.showResults}
        </div>
    )
}

export default GridItem
