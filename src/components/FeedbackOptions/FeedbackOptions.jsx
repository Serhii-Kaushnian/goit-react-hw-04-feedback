import React from 'react';
import {
  FeedbackOptionsWrapper,
  OptionList,
  OptionButton,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  let propsNames = Object.keys(options);
  return (
    <FeedbackOptionsWrapper>
      <OptionList>
        {propsNames.map(value => {
          return (
            <li key={value}>
              <OptionButton
                name={value}
                type="button"
                onClick={onLeaveFeedback}
              >
                {value}
              </OptionButton>
            </li>
          );
        })}
      </OptionList>
    </FeedbackOptionsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
