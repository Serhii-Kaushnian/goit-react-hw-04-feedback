import React from 'react';
import { StatisticsWrapper, StatisticsList, Accent } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsWrapper>
      <StatisticsList>
        <li>
          <Accent>Good</Accent>:{good}đ
        </li>
        <li>
          <Accent>Neutral</Accent>:{neutral}đ¤¨
        </li>
        <li>
          <Accent>Bad</Accent>:{bad}âšī¸
        </li>
        <li>
          <Accent>Total</Accent> :{total}
        </li>
        <li>
          <Accent>Positive feedback</Accent> :{positivePercentage}%
        </li>
      </StatisticsList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
