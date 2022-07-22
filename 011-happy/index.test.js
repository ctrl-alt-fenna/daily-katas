import {happyAlgorithm} from "." 
test('happyAlgorithm(139) ➞ "HAPPY 5"', () => {
    const input = 139
    const expected = "HAPPY 5";
    
    const actual = happyAlgorithm(input)

    expect(actual).toBe(expected);
})
test('happyAlgorithm(67) ➞ "SAD 10"', () => {
    const input = 67
    const expected = "SAD 10";
    
    const actual = happyAlgorithm(input)

    expect(actual).toBe(expected);
})
test('happyAlgorithm(1) ➞ "HAPPY 1"', () => {
    const input = 1
    const expected = "HAPPY 1";
    
    const actual = happyAlgorithm(input)

    expect(actual).toBe(expected);
})
test('happyAlgorithm(89) ➞ "SAD 8"', () => {
    const input = 89
    const expected = "SAD 8";
    
    const actual = happyAlgorithm(input)

    expect(actual).toBe(expected);
})
test('happyAlgorithm(0) ➞ "HAPPY 1"', () => {
    const input = 0
    const expected = "HAPPY 1";
    
    const actual = happyAlgorithm(input)

    expect(actual).toBe(expected);
})
test('happyAlgorithm(2) ➞ "SAD 9"', () => {
    const input = 2
    const expected = "SAD 9";
    
    const actual = happyAlgorithm(input)

    expect(actual).toBe(expected);
})