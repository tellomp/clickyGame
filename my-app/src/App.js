import React, {Component} from 'react';
import './App.css';
import CharacterCards from  './components/CharacterCards';
import characters from  './characters.json';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const shuffleImages = CharactersArray => {
  for (let i = CharactersArray.length - 1; i> 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1));
    [CharactersArray[i], CharactersArray[j]] = [CharactersArray[j], CharactersArray[i]];
  }
  return CharactersArray;
};

class App extends Component {

  state={
    characters,
    topScore: 0,
    currentScore: 0,
    clicked: []
  };

  componentDidMount(){
    console.log(this.state.characters)

  }
 
  handleclick = id =>
{
  if (this.state.clicked.indexOf(id) === -1)
  {
    this.handleIncrement();
    this.setState({
      clicked: this.state.clicked.concat(id)
    })
  } else
  {
    this.handleReset();
  } 
  };

  handleIncrement = () => 
  {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
     
    });
    if (newScore >= this.state.topScore)
    {
      this.setState({
        topScore: newScore
      });
    }
    
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState ({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    alert("You lose. Play again?");
    this.handleShuffle();
  };
  
  handleShuffle = () => {
    let shuffledCharacters = shuffleImages(characters);
    this.setState({
      characters: shuffledCharacters
    });
  };


  render (){
    return(
      <Wrapper>
        <div>
          <Navbar
            score = {this.state.currentScore}
            topScore = {this.state.topScore}
            // message = {this.state.message}
          />
        </div>
        <div>
        <Jumbotron
        />
        </div>
        <div className="cards">
        {this.state.characters.map(image =>(
        <CharacterCards
          key = {image.id}
          handleclick = {this.handleclick}
          handleIncrement = {this.handleIncrement}
          handleReset = {this.handleReset}
          handleShuffle = {this.handleShuffle}
          id = {image.id}
          image = {image.image}
          name = {image.name}
        />
        ))}
        </div>
        <Footer/>
      </Wrapper>
    )
}


}
export default App;