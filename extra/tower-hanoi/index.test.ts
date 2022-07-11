import { hanoi } from ".";
test("Hanoi(3) should equal 7", () => {
    expect(hanoi(3)).toBe(7);
});
test("Hanoi(5) should equal 31", () => {
    expect(hanoi(5)).toBe(31);
});
test("Hanoi(0) should equal 0", () => {
    expect(hanoi(0)).toBe(0);
});
test("Hanoi(1) should equal 1", () => {
    expect(hanoi(1)).toBe(1);
});