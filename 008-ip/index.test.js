// isValidIP("1.2.3.4") ➞ true 
 
// isValidIP("1.2.3") ➞ false 
 
// isValidIP("1.2.3.4.5") ➞ false 
 
// isValidIP("123.45.67.89") ➞ true 
 
// isValidIP("123.456.78.90") ➞ false 
 
// isValidIP("123.045.067.089") ➞ false
import { isValidIP } from ".";
test("1.2.3.4 should return true", () => {
    const input = "1.2.3.4"
    const expected = true

    const actual = isValidIP(input)
    expect(actual).toBe(expected);
})
test("1.2.3 should return false", () => {
    const input = "1.2.3"
    const expected = false

    const actual = isValidIP(input)
    expect(actual).toBe(expected);
})
test("1.2.3.4.5 should return false", () => {
    const input = "1.2.3.4.5"
    const expected = false

    const actual = isValidIP(input)
    expect(actual).toBe(expected);
})
test("123.45.67.89 should return true", () => {
    const input = "123.45.67.89"
    const expected = true

    const actual = isValidIP(input)
    expect(actual).toBe(expected);
})
test("123.456.78.90 should return false", () => {
    const input = "123.456.78.90"
    const expected = false

    const actual = isValidIP(input)
    expect(actual).toBe(expected);
})
test("123.045.067.089 should return false", () => {
    const input = "123.045.067.089"
    const expected = false

    const actual = isValidIP(input)
    expect(actual).toBe(expected);
})