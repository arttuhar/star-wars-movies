import React from 'react'
import Grid from './Grid'

function Content(props) {
    return (
        <div className='contentContainer'>
            <Grid showResults={props.showResults}/>
        </div>
    )
}

export default Content
