import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard.js';

function App() {

// state
//--------------------------------------------------------------------------------------
const [searchInput, setsearchInput] = useState();
const [CardsInflated, setCardsInflated] = useState(false);
//--------------------------------------------------------------------------------------

/*
// Prototye inheritance
function x (y) {
  this.a = "Lol";
}
x.prototype.b = "ye";
const q = new x;
console.log(q.b);
*/

/*
  const inputTextChangeEvent = (event) => {
    setsearchInput(event.target.value);
  }

  const data = [];
  let cards = null;

  const SearchEvent = () => {   
    if (searchInput != null) {
      const data = [];
      const http = new XMLHttpRequest();
      let url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + searchInput;
      http.open("GET", url);
      http.setRequestHeader("X-RapidAPI-Key", "f5b13fbecdmsh4d39ea459e16f58p10d3dajsnfb1a431ba454");
      http.send();    
      http.onload = () => {
        let request = JSON.parse(http.responseText);
        if (http.status === 200) {
          for (let i=0; i<request.list.length; i++) {
            data.push(request.list[i]);
          }
          //console.log(array[0]["author"]);      
          console.log(data);
          setCardsInflated(true);
        }  else {
          console.log("connection fail :(");
        }  
      }

      http.onloadend = () => {
          cards = (
            <div>
              Yo
              {data}
            </div>
            /*
              [1,2,3].map(x => 2 * x)
              [ 2, 4, 6 ]
            *//*
          );
        }
    }
  }*/


  
  

  return (
    <div className="App">
      <input onChange={inputTextChangeEvent}></input>
      <button onClick={SearchEvent}>Search</button>
      {CardsInflated === true ?  cards : null}  
    </div>
  );


}
export default App;