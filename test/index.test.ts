import w from "../src";

describe("unicode-string-width", () => {
  it("combinations", () => {
    expect(w("a")).toBe(1);
    expect(w("中")).toBe(2);
    expect(w("😀")).toBe(2);
    expect(w("👩‍👦")).toBe(2);
    expect(w("a沈😀👩‍👦")).toBe(7);
  });
});
