import React, {useState, useEffect} from 'react'


const MyWordsList = () => {

const [savedWords, setWordsString] = useState([]);


    const getSavedWords = () => {
        const savedWords = JSON.parse(localStorage.getItem('myWordsList'));
        if (savedWords) {
            setWordsString(savedWords);
        }
    };

    return (
        <div className='myWordsList'>          
            <h3>My new words </h3>
            <button className='button-saved-words' onClick={getSavedWords}> &#x2713;</button>
            <ul>
                {savedWords}
            </ul>
        </div>
    );
};

export default MyWordsList


