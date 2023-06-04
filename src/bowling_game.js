export function calculateScores(rolls) {
  let totalScore = 0;

  for (let i = 0; i < rolls.length; i++) {
    let roll = rolls[i];
    totalScore += rolls[i];
  }

  return totalScore;
}
