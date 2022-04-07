// Write your Character component here

import React, { useState } from "react";
import styled from "styled-components";
 
const StyledCard= styled.div`
width: 250px;
height: 300px;
border: 5px solid black;
display: inline-grid;
margin: 20px;
background-color: white;
`
const CharacterName= styled.h2`
font-family: 'Coda';
font-size: 2em;
`
 
const CharacterInfo= styled.p`
font-family: 'Oswald';
font-size: 1.6em;
font-weight: 300;
`
 
function Character(props) {
  const {data} = props;
  return (
    <StyledCard>
      <CharacterName>{data.name}</CharacterName>
      <CharacterInfo>Birth Year: {data.birth_year}</CharacterInfo>
      <CharacterInfo>Gender: {data.gender}</CharacterInfo>
    </StyledCard>
  )
}
 
export default Character

