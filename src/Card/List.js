import React from 'react'
import data from './data.json'; 


function List() {
    return (
    <div className='container-list'>
        <ul>
        {data.map((word) => (
            <li key={word.id}>{word.english}</li>
        ))}
        </ul>
    </div>
    )   
}

export default List;