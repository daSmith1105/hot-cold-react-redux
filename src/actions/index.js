export const RESTART_GAME = "RESTART_GAME";
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});

export const UPDATE_AURAL_STATUS = "UPDATE_AURAL_STATUS";
export const updateAuralStatus = () => ({
        type: UPDATE_AURAL_STATUS
    });    


export const SUBMIT_GUESS = "SUBMIT_GUESS";
export const submitGuess = guess => ({
    type: SUBMIT_GUESS,
    guess
});