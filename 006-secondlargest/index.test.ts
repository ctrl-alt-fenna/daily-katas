import { secondLargest } from ".";
// secondLargest([10, 40, 30, 20, 50]) ➞ 40 
 
// secondLargest([25, 143, 89, 13, 105]) ➞ 105 
 
// secondLargest([54, 23, 11, 17, 10]) ➞ 23 
 
// secondLargest([1, 1]) ➞ 0 
 
// secondLargest([1]) ➞ 1 
 
// secondLargest([]) ➞ 0
test("secondLargest([10, 40, 30, 20, 50]) should output 40", () => {
    let input = [10, 40, 30, 20, 50]
    let expected = 40
    
    let actual = secondLargest(input)

    expect(actual).toBe(expected)
});
test("secondLargest([25, 143, 89, 13, 105]) should output 105", () => {
    let input = [25, 143, 89, 13, 105]
    let expected = 105
    
    let actual = secondLargest(input)

    expect(actual).toBe(expected)
});
test("secondLargest([54, 23, 11, 17, 10]) should output 23", () => {
    let input = [54, 23, 11, 17, 10]
    let expected = 23;
    
    let actual = secondLargest(input)

    expect(actual).toBe(expected)
});
test("secondLargest([1,1]) should output 0", () => {
    let input = [1,1]
    let expected = 0;
    
    let actual = secondLargest(input)

    expect(actual).toBe(expected)
});
test("secondLargest([]) should output 0", () => {
    let input = []
    let expected = 0;
    
    let actual = secondLargest(input)

    expect(actual).toBe(expected)
});
test("secondLargest([1]) should output 1", () => {
    let input = [1]
    let expected = 1;
    
    let actual = secondLargest(input)

    expect(actual).toBe(expected)
});