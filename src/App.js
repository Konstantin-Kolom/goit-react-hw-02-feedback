import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  constructor() {
    super();
    this.total = 0;
    this.positiveFeedback = 0;
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = () => {
    return this.state;
  };

  countFeedback = e => {
    const targetText = e.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [targetText]: prevState[targetText] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return (this.total = this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.positiveFeedback = Math.round((this.state.good / this.total) * 100));
  };

  render() {
    //  const total = this.state.good + this.state.neutral + this.state.bad;
    //  const positiveFeedback = Math.ceil((this.state.good / total) * 100);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.LeaveFeedback()}
            countFeedback={this.countFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
