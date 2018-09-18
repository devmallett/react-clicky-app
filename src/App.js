import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Title from "./components/Title";
import characters from "./characters.json";
import './App.css';
import NavBar from "./components/NavBar"

// Handful coming at you...
class App extends Component {

  //Initializing this.state.characters to characters json array
  constructor(props) {
    super(props);
    this.state = {
       characters,
      clicks:0,
      highScore: 0,
      message: "Start up",
      selected: []
    };
  }

  
  userClick = (id) => {
    console.log(`yo ${id}`)
    // {this.state.characters.map()}
      if (this.state.clicks >= this.state.highScore) {
        // Initially this condition was supposed to register non clicks but only way to register clicks to score card was to switch setState

        
        this.setState({
          highScore: 0 ,//count: this.state.count + 1
          message: "Facts",
          clicks: this.state.clicks +1 ,
          selected: []
        });
      
      }else if (id ===this.state.clicks[id] ){
      this.setState({
        message: "False",
        highScore: this.state.highScore,
        clicks: 0 // this.state.clicks + 1
      })
      this.state.selected.push(id);
      this.shuffleThem(this.state.selected);
      console.log(`${id} we here wit it`);
      
    }
  
  }
// Fucntion to shuffle cards...should be regiestered with click event but it dnw
  shuffleThem = charsArray => {
    
    for (let i = charsArray.length + 1; i > 0; i++) {
      let shuff = Math.floor(Math.random() * (i + 1));
      let hold =charsArray[i];
     charsArray[i] =charsArray[shuff];
     charsArray[shuff] = hold;
    }    
  };

  
  // Map over this.state.characters and render a CharCard component for each character object 
  render() {
    return (
      <div>
        {/* For some reason bootstrap nav call will not render actual nav  */}
      <NavBar   
      clicks={this.state.clicks}
      message={this.state.message}
      highScore={this.state.highScore}
    
      />
    
      <Title >Shameless CharacterList</Title>
      {/* map over this.state.characters aray where our call back parameter is character */}
      {this.state.characters.map(character  => (
        <CharCard 
        shuffleThem = {this.shuffleThem}
        userClick = {this.userClick}
        id={character.id}
        key={character.id}
        image={character.image}
        />
      ))}
    
    </div>
    );
  }
}

export default App;
