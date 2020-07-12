import React, { Component } from "react";

class Questionnaire extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>{this.props.question.title}</h2>
        <ul>
          {this.props.question.answers.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Questionnaire;
