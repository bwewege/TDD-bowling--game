import { calculateScores } from "./bowling_game";

describe("Calculate scores for a normal game of bowling with 10 frames", () => {
  test("All gutter balls, score to be 0", () => {
    expect(
      calculateScores([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ])
    ).toBe(0);
  });
  test("Various scores for each roll, no spares or strikes", () => {
    expect(
      calculateScores([
        3, 4, 3, 4, 2, 3, 4, 5, 3, 2, 1, 0, 2, 4, 5, 1, 3, 4, 1, 2,
      ])
    ).toBe(56);
  });
});
