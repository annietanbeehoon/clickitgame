import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Introduction from './components/Introduction';
import memories from './memories.json';
import './App.css';

let currentScore = 0;
let highScore = 0;
let message = "Click an image to start the game.";

//set initialstate
class App extends Component {
  state = {
    memories,
    currentScore,
    highScore,
    message
  };

  //Reference : handleFormSubmit activity18-19React
  handleClicked = id => {
    
    //filter for clicked card using ID
    const clickedCard = this.state.memories.filter(memory => memory.id === id);

    // Cards set to default false in JSON
    // Card clicked already -> game over
    if (clickedCard[0].clicked) {
      currentScore = 0;
      message = "You clicked on this card before. Play again"

      // reset all cards to false to play again
      for (let i = 0; i < memories.length; i++) {
        memories[i].selected = false;
      }

      this.setState({ memories });
      this.setState({ currentScore });
      this.setState({ message });

      //Case two: if more cards to go and clicked card is false set to true
      //increment score
      //compare current and high score

    } else if (currentScore < 11) {

      clickedCard[0].clicked = true;

      currentScore++;
      message = "Nice job!";

      if (currentScore > highScore) {
        highScore = currentScore;
        this.setState({ highScore });
      }

      // reference : CSS Tricks Technique #2 yourArray.sort(function() { return 0.5 - Math.random() });
      memories.sort(function (a, b) { return 0.5 - Math.random() });

      // case 3 = no more cards to click - reach 12
    } else {

      clickedCard[0].clicked = true;

      currentScore = 0;
      message = "Fantastic memory!";
      highScore = 12;
      this.setState({ highScore })

      for (let i = 0; i < memories.length; i++) {
        memories[i].clicked = false;
      }
      memories.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ memories });
      this.setState({ currentScore });
      this.setState({ message });
    }
  };

  // Not able to get page to refresh after game over

  render() {
    return (
      <Wrapper>,
      <Nav>{message} Current Score: {currentScore} High Score: {highScore}</Nav>
        <Introduction />
        {this.state.memories.map(memory => (
          <MemoryCard
            handleClicked={this.handleClicked}
            key={memory.id}
            id={memory.id}
            type={memory.type}
            image={memory.image}
          />


        ))}

      </Wrapper>
    );
  }
}

export default App;

// onclick 
// check id=cardId
// if clicked card is clicked before --> do game over + handleShuffle
// Need to set State for scores?
// if clicked card is false and less than 11 --> go on ++1 Score
// if clicked card is false and reach 12 --> 


// Compare Score
// if Score > HighScore
// Score = HighScore
// Otherwise Score = O - reset function

// if Score = 12
// End game
// alert " You've are a memory Champion!"
// reset Score = 0

// Shuffle Card after each click


// this shuffle code did not work
  // shuffleMemoryCard = array => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j] = array[i], array[j]];
  //   }
  //   return array;
  // };
// shuffle = () => {
//   let shuffleCard=shuffleCard(memories);
//   this.setState({memories: shuffleCard})
// };


