import React from "react";
import "./style.css";

const Navbar = props => (

  <nav className="navbar">
  <ul>
  <li className="firstItem">
  <a href="/">GREY'S ANATOMY CLICKY GAME</a>
  </li>
  <li className="secondItem"><h6>Click on a character to earn points</h6><h6> If you click on the same one twice, you lose!</h6></li>
  <li className= "thirdItem">SCORE: {props.score} | TOP SCORE: {props.topScore}</li>
  </ul>
  </nav>
 
);
    
        
export default Navbar;


