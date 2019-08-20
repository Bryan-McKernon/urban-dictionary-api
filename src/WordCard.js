import React from 'react';
import './WordCard.css';
/*
            
            <div className="definition">{props.Definition}</div>
            <div className="example">{props.Example}</div>
            <div className="likes">{props.Likes}</div>
            <div className="dislikes">{props.Dislikes}</div>
            <div className="author">{props.Author}</div>
            <div className="datesubmitted">{props.DateSubmitted}</div>

*/

const WordCard = (props) => {    
    return (
        <div>
            <div className="cardContainer">{props.Definition}</div>
        </div>        
    )
}
export default WordCard;