export function calculateScores(rolls) {
  let totalScore = 0;
  let frame = 0;

  for (let f = 0; f < 10; f++) {
    const firstRoll = rolls[frame];

    if (firstRoll === 10) {
      totalScore += 10 + rolls[frame + 1] + rolls[frame + 2];
      frame++;
    } else {
      const secondRoll = rolls[frame + 1];
      totalScore += firstRoll + secondRoll;

      if (firstRoll + secondRoll === 10) {
        totalScore += rolls[frame + 2];
      }

      frame = frame + 2;
    }
  }
  return totalScore;
}
