export function calculateScores(rolls) {
  let totalScore = 0;

  for (let f = 0; f < 10; f++) {
    const frame = f * 2;
    const firstRoll = rolls[frame];
    const secondRoll = rolls[frame + 1];
    totalScore += firstRoll + secondRoll;
    if (firstRoll + secondRoll === 10) {
      totalScore += rolls[frame + 2];
    }
  }

  return totalScore;
}
