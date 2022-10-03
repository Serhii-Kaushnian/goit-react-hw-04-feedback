import React, { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import { Feedback } from './App.styles';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const options = {
    good,
    bad,
    neutral,
  };

  const onStateChange = event => {
    const { name } = event.currentTarget;

    switch (name) {
      case `good`:
        setGood(prev => prev + 1);
        break;

      case `bad`:
        setBad(prev => prev + 1);
        break;

      case `neutral`:
        setNeutral(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedbackValue = Object.values(options);
    let total = totalFeedbackValue.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const statsAmount = countTotalFeedback()
      ? Math.floor((good * 100) / countTotalFeedback())
      : 0;
    return statsAmount;
  };
  return (
    <Feedback>
      <Section title="Please leave Your feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onStateChange}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={() => {
              return countTotalFeedback();
            }}
            positivePercentage={() => {
              return countPositiveFeedbackPercentage();
            }}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Feedback>
  );
}
