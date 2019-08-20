import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard.js';

function App() {

// state
//--------------------------------------------------------------------------------------
const [searchInput, setsearchInput] = useState();
const [CardsInflated, setCardsInflated] = useState(false);
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
  const response = await
   fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchInput}`, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f5b13fbecdmsh4d39ea459e16f58p10d3dajsnfb1a431ba454'
      }
  });

  if (response.ok) {
    const json = await response.json();
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
      console.log("Connection Failed");
    } 
  }

  let AllCards = null;
  if (CardsInflated) { 
    console.log(Cards[0]["Definition"]);
    AllCards = (
      <div>
        {Cards.map((card, index) => {
          return ( 
            <WordCard
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
  }

  return (
    <div className="App">
      <header>Welcome to my Urban Dictionary<hr/></header>
      <div className="Search_Container">
        <input className="SearchInput" onChange={inputTextChangeEvent}></input>
        <button className="SearchButton" onClick={SearchEvent}>Search</button>
      </div>
      {AllCards}  
    </div>
  );


}
export default App;