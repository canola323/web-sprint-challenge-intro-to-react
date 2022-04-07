import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
 
const CardContainer = styled.ul`
width: 80%;
margin: 0 auto;
`
 
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 
  const [characters, setCharacters] = useState([]);
 
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data);
    }).catch(err => console.error(err))
  }, [])
 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CardContainer>
        {characters.map(ch => {
          return  <Character key={ch.id} data={ch}/>
        })}
      </CardContainer>
    </div>
  );
}
 
export default App;
