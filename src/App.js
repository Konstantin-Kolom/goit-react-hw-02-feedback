import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Container from './components/Container/Container';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,}

  render() {
    // const { good } = this.state;
    // const { neutral } = this.state;
    // const { bad } = this.state;
    return (
      <Container>
        <h1>Please leave feedback</h1>

        <FeedbackOptions />
        <Statistics />

        {/* <FeedbackOptions options={good, neutral, bad} onLeaveFeedback={}> */}
        {/* Statistics good={} neutral={} bad={} total={} positivePercentage={}> */}
      </Container>
    );
    //  },
  }
}

export default App;
