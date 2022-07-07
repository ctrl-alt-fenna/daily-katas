import {points} from '.'
test("points(1,1) should equal 5", () => {
    expect(points(1,1)).toBe(5)
});
test("points(7,5) should equal 29", () => {
    expect(points(7,5)).toBe(29)
});
test("points(38,8) should equal 100", () => {
    expect(points(38,8)).toBe(100)
});
test("points(0,1) should equal 3", () => {
    expect(points(0,1)).toBe(3)
});
test("points(0,0) should equal 0", () => {
    expect(points(0,0)).toBe(0)
});
test("points(-1,0) should throw error", () => {
    expect(() => points(-1,0)).toThrow("Cannot have negative points");
});
test("points(0,-1) should throw error", () => {
    expect(() => points(0,-1)).toThrow("Cannot have negative points");
});
test("points(-1,-1) should throw error", () => {
    expect(() => points(-1,-1)).toThrow("Cannot have negative points");
});