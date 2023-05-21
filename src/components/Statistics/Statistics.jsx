import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePersantage }) => {
  return (
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutural: {neutral}</li>
      <li>Bad: {bad} </li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePersantage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersantage: PropTypes.number.isRequired,
};
