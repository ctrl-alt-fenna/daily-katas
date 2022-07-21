export function caesarCipher(text, rotation) {
    const isLower = /[a-z]/
    const isUpper = /[A-Z]/
    const isLetter = /[a-z]/i
    // Consts to make charcodes more legible
    const A = 65, Z = 90;
    const a = 96, z = 122;
    let encyphered = ''
    for (const char of text) {
        if (!isLetter.test(char)) encyphered += char;
        else {
            const charCode = char.charCodeAt(char);
            let rotatedCode = charCode + rotation
            if (isLower.test(char)) {
                if (rotatedCode > z) {
                    // Rotate the remainder over the other way
                    let leftOver = rotation - (z - charCode);
                    rotatedCode = a + leftOver;
                }
            }
            else if (isUpper.test(char)) {
                if (rotatedCode > Z) {
                    // Rotate the remainder over the other way
                    let leftOver = rotation - (Z - charCode);
                    rotatedCode = A + leftOver
                }
            }
            encyphered += String.fromCharCode(rotatedCode)
        }
    }
    return encyphered
}