import React from 'react';
import {
  FeedbackOptionsWrapper,
  OptionList,
  OptionButton,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsWrapper>
      <OptionList>
        {options.map(value => {
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
