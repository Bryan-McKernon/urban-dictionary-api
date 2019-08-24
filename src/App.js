import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard.js';
import Loading from './Loading.js';
import WordNotFound from './WordNotFound.js';

function App() {

// state
//--------------------------------------------------------------------------------------
const [searchInput, setsearchInput] = useState();
const [CardsInflated, setCardsInflated] = useState(null);
const [WordNotFoundBoolean, setWordNotFoundBoolean] = useState();
const [Cards, setCards] = useState();
//--------------------------------------------------------------------------------------

class Card  {
  constructor(Definition, Example, Likes, Dislikes, Author, DateSubmitted) {
    this.Definition = Definition;
    this.Example = Example;
    this.Likes = Likes;
    this.Dislikes = Dislikes;
    this.Author = Author;
    this.DateSubmitted = DateSubmitted;
  }
}

const inputTextChangeEvent = (event) => {
  setsearchInput(event.target.value);
}

/*
  - create HTTP con
  - on SearchEvent 
    - get user input
    - pass user input to url
    - if 200 proceed
  - loop thru and construct Card obj from json data and add Card obj to array Cards
  - use array Cards to pass value to component via props
  */

  const SearchEvent = async () => {
  setCardsInflated(false);
  setWordNotFoundBoolean(false);
  const response = await
   fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchInput}`, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f5b13fbecdmsh4d39ea459e16f58p10d3dajsnfb1a431ba454'
      }
  });
  
  if (response.ok) {
    const json = await response.json();    
      if (Object.keys(json["list"]).length > 0) {      
          let CardsArray = [];    
          let i;
          for (i=0; i<Object.keys(json["list"]).length; i++) {
            CardsArray.push(new Card(
                json["list"][i]["definition"],    
                json["list"][i]["example"],
                json["list"][i]["thumbs_up"],
                json["list"][i]["thumbs_down"],
                json["list"][i]["author"],
                json["list"][i]["written_on"]
              ));
            }
            setCards(CardsArray);
            setCardsInflated(true);
        } else {          
          setWordNotFoundBoolean(true);
          setCardsInflated(null);
        }
    } else {
      console.log("Connection Failed");
    }
  }

/*
  CardsInflated initializes as undefined! When the request begins
  (when the user clicks search) CardsInflated changes to false.
  Thus when the following if statement is read, else if fires
  and because the value is false, the loading code fires.
  When the request finishes and the cards are inflated, AllCards is
  given a value and the else statement doesn't run thus the loading
  sign disappears. 
*/

  let wnf = null;
  let AllCards = null;  
  let loading = null;  

  if (WordNotFoundBoolean) {
    wnf = (      
      <WordNotFound/>
    )
  }

  if (CardsInflated) { 
    AllCards = (
      <div>
        {Cards.map((card, index) => {
          return ( 
            <WordCard
             key={index}
             Definition = {Cards[index]["Definition"]}
             Example = {Cards[index]["Example"]}
             Likes = {Cards[index]["Likes"]}
             Dislikes = {Cards[index]["Dislikes"]}
             Author = {Cards[index]["Author"]}
             DateSubmitted = {Cards[index]["DateSubmitted"]}            
            />
          )
        })}
      </div>
    )
  } else if (CardsInflated === false) {
    loading = (
      <Loading/>      
    )
  }

  return (
    <div className="App">
      <header>Welcome to my Urban Dictionary<hr/></header>
      <div className="Search_Container">
        <input autoFocus className="SearchInput" onChange={inputTextChangeEvent}></input>
        <button className="SearchButton" onClick={SearchEvent}>Search</button>
      </div>
      {AllCards}
      {loading}
      {wnf}
    </div>
  );


}
export default App;