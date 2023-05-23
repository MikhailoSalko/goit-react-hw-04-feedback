import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './NotificationMessage/Notification';
import Statistics from './Statistics/Statistics';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;
  const options = Object.keys(state);

  const countFeedback = e => {
    const { name } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countPositiveFeedbackPercentage = total => {
    const { good } = state;
    const positivePersantage = Math.round((good / total) * 100);
    return positivePersantage;
  };

  const total = good + neutral + bad;
  const positivePersantage = countPositiveFeedbackPercentage(total);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onleaveFeedback={countFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePersantage={positivePersantage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
