import React from 'react';
import './WordCard.css';
import likesImage from './thumbs_up.png';
import dislikesImage from './thumbs_down.png';

const WordCard = (props) => {
    let ConvertDate = new Date(props.DateSubmitted);
    let DateConverted = ConvertDate.toDateString();
    return (
        <div className="CardsContainer">
            <div className="Card">
                <div className="definition">
                    <b>Definition:</b><br/> {props.Definition}
                </div>
                <div className="example">
                    <b>Example:</b><br/> {props.Example}
                </div>
                <div className="author">                    
                    <b>By: </b>{props.Author}
                </div>
                <hr/>
                <div className="CardFooter">                    
                    <div className="likesAndDislikesContainer">
                        <div className="likesContainer">
                            <img className="likes_image" src={likesImage}/>
                            <div className="likes_value">{props.Likes}</div>
                        </div>
                        <div className="dislikesContainer">
                            <img className="dislikes_image" src={dislikesImage}/>
                            <div className="dislikes_value">{props.Dislikes}</div>
                        </div>
                    </div>
                    <div className="datesubmitted">{DateConverted}</div>                    
                </div>
            </div>
        </div>   
    )
}
export default WordCard;