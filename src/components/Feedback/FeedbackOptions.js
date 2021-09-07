import s from './Feedback.module.css';

import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.listButton}>
      {options.map(value => (
        <li className={s.itemButton} key={value}>
          <button className={s.feedback} key={value} type="button" onClick={onLeaveFeedback}>
            <span className={s.nameBtn}>{value}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  props: PropTypes.arrayOf({
    options: PropTypes.string.isRequired,
  }),
};
