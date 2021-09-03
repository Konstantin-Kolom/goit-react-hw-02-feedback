import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total !== 0 ? (
        [
          <ul key={1} className={s.listFeedback}>
            <li className={s.itemFeedback}>
              <p>Good: {good}</p>
            </li>
            <li className={s.itemFeedback}>
              <p>Neutral: {neutral}</p>
            </li>
            <li className={s.itemFeedback}>
              <p>Bad: {bad}</p>
            </li>
            <li className={s.itemFeedback}>
              <p>Total: {total}</p>
            </li>
            <li className={s.itemFeedback}>
              <p>Positive feedback: {positivePercentage} %</p>
            </li>
          </ul>,
        ]
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
