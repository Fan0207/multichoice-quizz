import React, { Component } from "react";
import "./Quizz.css";
import QuestionList from "./QuestionList";

class Quizz extends Component {
  state = {
    questions: [
      { title: "Quel est l'âge du capitaine?", answers: ["1", "3", "4", "6"] },
      { title: "Combien font 2+2?", answers: ["2", "4", "6", "7"] },
      { title: "Qui qui c'est qui nous faut?" },
      { title: "Linux ou Windows ou Mac <3?" },
    ],
  };

  render() {
    return (
      <div className="quizz">
        <h1 className="quizz__title">Fancy Quizz App</h1>
        <div className="quizz__content"></div>
        <QuestionList questions={this.state.questions} />
      </div>
    );
  }
}

export default Quizz;
