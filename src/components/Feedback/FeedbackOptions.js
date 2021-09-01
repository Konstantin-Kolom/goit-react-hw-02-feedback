import React, { Component } from 'react';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    const targetText = e.target.textContent.toLowerCase();

    this.setState(prevState => {
      // console.log(prevState[targetText]);
      return {
        [targetText]: prevState[targetText] + 1,
        //   total: prevState.good + prevState.neutral + prevState.bad + 1,
        //   positiveFeedback: Math.ceil((prevState.good / prevState.total) * 100),
      };
    });
  };

  countTotalFeedback = prevState => {
    this.setState(() => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = Math.ceil((this.state.good / total) * 100);
    return (
      <div>
        <button type="button" onClick={this.countFeedback}>
          Good
        </button>
        <button type="button" onClick={this.countFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.countFeedback}>
          Bad
        </button>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positiveFeedback} %</p>
      </div>
    );
  }
}

export default FeedbackOptions;
