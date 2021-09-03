import React, { Component } from 'react';
import s from './Feedback.module.css';

import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  state = this.props.onLeaveFeedback;

  render() {
    return (
      <ul className={s.listButton}>
        {this.props.options.map(value => (
          <li className={s.itemButton}>
            <button
              className={s.feedback}
              key={value}
              type="button"
              onClick={this.props.countFeedback}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  props: PropTypes.arrayOf({
    options: PropTypes.string.isRequired,
  }),
};
