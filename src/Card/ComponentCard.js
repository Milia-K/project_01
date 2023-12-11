import React, { Component } from 'react'

class ComponentCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    };

    componentDidUpdate(prevProps) {
        if (prevProps.english !== this.props.english) {
            this.setState({
                isClicked: false
            });
        }
    }

    render (){
        const {english, transcription, russian } = this.props;
        const { isClicked } = this.state;
        const componentStyle_question = {
            display: isClicked ? 'none' : 'contents',
        };
        const componentStyle_answer = {
            display: isClicked ? 'contents' : 'none',


        };
        const componentStyle_card = {
            backgroundColor:  isClicked ? '#598D66' : '#D4E8D9',
            color: isClicked ? '#FFFFFF' : 'black'
        };

    return (
    <div className='component-card'   onClick={this.handleClick} style={componentStyle_card} >
            <div className='question'  style={componentStyle_question}  >Question
                <div className='card-word'><h1>{english}</h1></div>
                <div className='card-transcription'><h3> {transcription} </h3></div>
            </div>
            <div className='answer'  style={componentStyle_answer}  >Answer
                <div className='card-translation'><h1> {russian}</h1></div>
            </div>
    </div>

    )
}
}

export default ComponentCard