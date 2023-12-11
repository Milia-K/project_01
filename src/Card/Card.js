import React, { useState} from 'react'
import ComponentCard from './ComponentCard';
import data from './data.json';
import Folder from '../Folder/Folder';
import UseWordsString from './UseWordsString';


function Card() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCardClicked, setIsCardClicked] = useState(false);
    const {addWord,wordsString ,setWordsString} = UseWordsString();
    
    const handleNextClick = () => {
        const myWord = data[currentIndex];
        addWord(myWord);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsCardClicked(false);
        localStorage.setItem('myWordsList', JSON.stringify(wordsString));
    }

    const handlePreviousClick = () => {
        setCurrentIndex(prevIndex => prevIndex-1)
        setIsCardClicked(false)
    ;}    

    const handleCardClick = () => {
        setIsCardClicked(true); 
    }

    return (
    <div>
        <ComponentCard
            english={data[currentIndex].english}
            transcription={data[currentIndex].transcription}
            russian={data[currentIndex].russian}
            isClicked={isCardClicked}
            handleClick={handleCardClick}
    />
        <button onClick={handlePreviousClick} disabled={currentIndex===0} className='button-previous'>&#11164;</button>
        <button onClick={handleNextClick} disabled={currentIndex===data.length - 1}  className='button-next'>&#11166;</button>
        <Folder />
        <p>{addWord}</p>

    </div>           
)
}

export default Card;
