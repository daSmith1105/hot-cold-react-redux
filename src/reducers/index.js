import { RESTART_GAME, UPDATE_AURAL_STATUS, SUBMIT_GUESS } from '../actions/index';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const masterReducer = (state=initialState, action) => {

    switch (action.type) {
        case RESTART_GAME : {
            return Object.assign({}, state, {
                guesses: [],
                feedback: "Make your guess!",
                auralStatus: "",
                correctAnswer: action.correctAnswer
            })
        }
        break;
        case UPDATE_AURAL_STATUS : {
            const { guesses, feedback } = state;

            // If there's not exactly 1 guess, we want to
            // pluralize the nouns in this aural update.
            const pluralize = guesses.length !== 1;
        
            let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
        
            if (guesses.length > 0) {
              auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
            }
        
            return ({...state, auralStatus});
            }
            return state;
        break;
        case SUBMIT_GUESS : {
            let feedback;

            let guess = parseInt(action.guess, 10);
            if (isNaN(guess)) {
                feedback = 'Please enter a valid number.';
    
                return Object.assign({}, state, {
                    feedback,
                    guesses: [...state.guesses, guess]
                });
            }
    
            const difference = Math.abs(guess - state.correctAnswer);
    
            if (difference >= 50) {
                feedback = "You're Ice Cold...";
            } else if (difference >= 30) {
                feedback = "You're Cold...";
            } else if (difference >= 10) {
                feedback = "You're Warm.";
            } else if (difference >= 1) {
                feedback = "You're Hot!";
            } else {
                feedback = 'You got it!';
            }
    
            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, guess]
            });
        }
        break;
        default: {
            return state;
        }
    }
}