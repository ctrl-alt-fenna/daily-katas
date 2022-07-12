import { charCount } from ".";
test("charCount('a', 'edabit') should return 1", () => {
    let character = 'a'
    let string = 'edabit'
    let output = 1;
    expect(charCount(character, string)).toBe(output);
})
test("charCount('c', 'Chamber of secrets')", () => {
    expect(charCount('c', 'Chamber of secrets')).toBe(1);
})
test('charCount("B", "boxes are fun") should return 0', () => {
    expect(charCount("B", "boxes are fun")).toBe(0);
})
test('charCount("b", "big fat bubble") should return 4', () => {
    expect(charCount("b", "big fat bubble")).toBe(4);
})
test('charCount("e", "javascript is good") should equal 0', () => {
    expect(charCount("e", "javascript is good")).toBe(0);
})
test('charCount("!", "!easy!") should equal 2', () => {
    expect(charCount("!", "!easy!")).toBe(2);
})
test('charCount("wow", "the universe is wow") should throw error', () => {
    expect(() => charCount("wow", "the universe is wow")).toThrow("Character length invalid")
})