import React from 'react';
import './WordCard.css';
    
const WordCard = (props) => {    
    return (
        <div className="CardsContainer">
            <div className="Card">
                <div className="definition">Definition: {props.Definition}</div>
                <div className="example">Example: {props.Example}</div>
                <div className="likes">{props.Likes}</div>
                <div className="dislikes">{props.Dislikes}</div>
                <div className="author">{props.Author}</div>
                <div className="datesubmitted">{props.DateSubmitted}</div>
            </div>
        </div>        
    )
}
export default WordCard;