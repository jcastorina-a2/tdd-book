class Dollar {
  constructor(amount: number) {}
  times(multiplier: number) {}
  amount: number;
}

describe("Money Example", () => {
  it("should multiply two dollars values together and return the result", () => {
    const testMultiplication = () => {
      const five = new Dollar(5);
      five.times(2);
      expect(five).toEqual(10);
    };
    testMultiplication();
  });
});
