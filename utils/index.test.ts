import { array_move } from ".";

describe("array_move", () => {
  it("should return a re-ordered string array", () => {
    expect(array_move([1, 2, 3], 1, 2)).toEqual([1, 3, 2]);
  });
  it("should return a re-ordered object array", () => {
    expect(
      array_move([{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }], 0, 3)
    ).toEqual([{ index: 2 }, { index: 3 }, { index: 4 }, { index: 1 }]);
  });
});
