import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    const targetText = e.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [targetText]: prevState[targetText] + 1,
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

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positiveFeedback}
        />
      </div>
    );
  }
}

export default FeedbackOptions;
