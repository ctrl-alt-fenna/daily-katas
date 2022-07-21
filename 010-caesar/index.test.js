import { caesarCipher } from ".";
/*
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb" 

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) 
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj" 
 
caesarCipher("A friend in need is a friend indeed", 20) 
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx" 
*/

test('caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb" ', () => {
    const inputString = "middle-Outz"
    const inputRotation = 2
    const expected = "okffng-Qwvb"

    const actual = caesarCipher(inputString, inputRotation)
    expect(actual).toBe(expected);
})
test('caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj" ', () => {
    const inputString = "Always-Look-on-the-Bright-Side-of-Life"
    const inputRotation = 5
    const expected = "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

    const actual = caesarCipher(inputString, inputRotation)
    expect(actual).toBe(expected);
})
test('caesarCipher("A friend in need is a friend indeed", 20) ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx" ', () => {
    const inputString = "A friend in need is a friend indeed"
    const inputRotation = 20
    const expected = "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

    const actual = caesarCipher(inputString, inputRotation)
    expect(actual).toBe(expected);
})