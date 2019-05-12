import React from "react";
import "./style.css";



const CharacterCards =  props => (

    <div>
        <img className= "click-item"
        id={props.id}
        key = {props.id}
        src={props.image}
        alt={props.name} 
        onClick={() => props.handleclick(props.id)}
     />
    </div>
   
  );


export default CharacterCards;