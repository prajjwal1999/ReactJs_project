import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      
      {name:"Prajjwal" , age:22},
      {name:"Alok" , age:22},
      {name:"Sourav" , age:22}

    ],
    otherState:'no other state'
  }
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
      
        {name:newName , age:22},
        {name:"Varsha" , age:22},
        {name:"Sourav" , age:22}
  
      ]

    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello My firstReact-app</h1>
        <p>Sup Man</p>
        <button onClick={this.switchNameHandler.bind(this,'Jammu')}>Click Here</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
  }


export default App;
