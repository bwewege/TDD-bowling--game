import { calculateScores } from "./bowling_game";

describe("Calculate scores for a normal game of bowling with 10 frames", () => {
  test("All gutter balls, score to be 0", () => {
    expect(
      calculateScores([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ])
    ).toBe(0);
  });
});
