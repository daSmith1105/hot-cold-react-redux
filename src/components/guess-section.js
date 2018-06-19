import React from 'react';
import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm/>
    </section>
  );
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesscount: state.guesses.length
});
