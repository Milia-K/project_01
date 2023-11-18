import React, { useState } from 'react'
import ComponentCard from './ComponentCard';
import data from './data.json';

function Card() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => prevIndex+1)
    ;}

    const handlePreviousClick = () => {
        setCurrentIndex(prevIndex => prevIndex-1)
    ;}    

    return (
    <div>
        <ComponentCard
            english={data[currentIndex].english}
            transcription={data[currentIndex].transcription}
            russian={data[currentIndex].russian}
    />
        <button onClick={handlePreviousClick} disabled={currentIndex===0} className='button-previous'>&#11164;</button>
        <button onClick={handleNextClick} disabled={currentIndex===data.length - 1}  className='button-next'>&#11166;</button>
    </div>       
    
)
}

export default Card;