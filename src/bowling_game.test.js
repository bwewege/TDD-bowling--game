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
  test("Various scores for each roll, with one frame a spare (not last frame)", () => {
    expect(
      calculateScores([
        0, 3, 4, 5, 6, 1, 7, 3, 5, 1, 2, 3, 4, 3, 1, 1, 1, 1, 1, 1,
      ])
    ).toBe(58);
  });
  test("Various scores for each roll, with a spare on last frame", () => {
    expect(
      calculateScores([
        3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 5, 5, 6,
      ])
    ).toBe(79);
  });
  test("Various scores for each roll, with one frame a strike (not last frame)", () => {
    expect(
      calculateScores([
        2, 3, 4, 1, 10, 4, 5, 2, 3, 0, 1, 8, 1, 2, 4, 5, 1, 0, 3,
      ])
    ).toBe(68);
  });
  test("Various scores for each roll, with one strike on last frame", () => {
    expect(
      calculateScores([
        4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 10, 9, 1,
      ])
    ).toBe(101);
  });
  test("Consecutive spare and strike frames", () => {
    expect(
      calculateScores([
        3, 4, 8, 2, 10, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
      ])
    ).toBe(77);
  });
  test("Perfect game, all strikes", () => {
    expect(calculateScores([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(
      300
    );
  });
});
