import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.state} />
      </Section>
    );
  }
}

export default App;
