import { howUnlucky } from ".";
/*
howUnlucky(2020) ➞ 2 
 
howUnlucky(2026) ➞ 3 
 
howUnlucky(2016) ➞ 1 
*/
test("howUnlucky(2020) should return 2", () =>{
    const input = 2020;
    const expected = 2;
    const actual = howUnlucky(input)

    expect(actual).toBe(expected);
})
test("howUnlucky(2026) should return 3", () =>{
    const input = 2026;
    const expected = 3;
    const actual = howUnlucky(input)

    expect(actual).toBe(expected);
})
test("howUnlucky(2016) should return 1", () =>{
    const input = 2016;
    const expected = 1;
    const actual = howUnlucky(input)

    expect(actual).toBe(expected);
})
test("howUnlucky(0) should return 2", () =>{
    const input = 0;
    const expected = 2;
    const actual = howUnlucky(input)

    expect(actual).toBe(expected);
})
test("howUnlucky(2006) should return 2", () =>{
    const input = 0;
    const expected = 2;
    const actual = howUnlucky(input)

    expect(actual).toBe(expected);
})
test("howUnlucky('a') should return error", () =>{
    const input = 'a'
    const expected = 'Year must be a valid number'
    expect(() => howUnlucky(input)).toThrow(expected);
})
test("howUnlucky() should return error", () =>{
    const expected = 'Year must be a valid number'
    expect(() => howUnlucky()).toThrow(expected);
})