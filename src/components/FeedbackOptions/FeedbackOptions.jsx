import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onleaveFeedback, options }) => {
  return (
    <ul className={styles.containerBtn}>
      {options.map(item => {
        return (
          <li key={item}>
            <button
              name={item}
              onClick={onleaveFeedback}
              className={`${styles.button} ${styles[item]}`}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  item: [],
};

FeedbackOptions.propTypes = {
  onleaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
