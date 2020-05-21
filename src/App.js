import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    quiz: [],          //3.axios
    score: 0
  }
  componentDidMount = async () =>{          //1.axios
    console.log("Inside componentDidMount");
    const response = await axios.get ("https://opentdb.com/api.php?amount=5");
    console.log(response.data)

    this.setState({
      quiz:response.data.results
    });
  }

  score = () => {          //function
    console.log("Button Clicked")

    this.setState({
      ...this.state,          //to grab everything from before in the api and adding + 1
      score:this.state.score + 1
    })
  }

  render() {
    console.log("Inside Render Function");
    const allQuestions = this.state.quiz.map((choice) => {          //2.axios
    return(
      <div>
          <h3>{choice.question}</h3>
          <h4 onClick={this.score}>{choice.correct_answer}</h4>
          <h4>{choice.incorrect_answers}</h4>
      </div>
    )
    });
    return(          //4.axios
      <div>
        <h1>My Score {this.state.score}</h1>
        <button onClick={this.componentDidMount}>New Set Questions</button> 
        {allQuestions}     
      </div>
    );
  }
}
export default App;