import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  state = this.props.onLeaveFeedback;

  countFeedback = e => {
    const targetText = e.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [targetText]: prevState[targetText] + 1,
      };
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = Math.ceil((this.state.good / total) * 100);
    return (
      <>
        {this.props.options.map(value => (
          <button key={value} type="button" onClick={this.countFeedback}>
            {value}
          </button>
        ))}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positiveFeedback}
        />
      </>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  props: PropTypes.arrayOf({
    options: PropTypes.string.isRequired,
  }),
};
