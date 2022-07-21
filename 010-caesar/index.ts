export function caesarCipher(text, rotation) {
    const isLower = /[a-z]/
    const isUpper = /[A-Z]/
    // Consts to make charcodes more legible
    const A = 65;
    const Z = 90
    const a = 96;
    const z = 122;
    let output = ''
    for (const char of text) {
        const charCode = char.charCodeAt(char);
        let rotatedCode = charCode + rotation
        if (isLower.test(char)) {
            if (rotatedCode > z) {
                // Rotate the remainder over the other way
                let leftOver = rotation - (z - charCode);
                rotatedCode = a + leftOver;
            }
            output += String.fromCharCode(rotatedCode);
        }
        else if (isUpper.test(char)) {
            if (rotatedCode > Z) {
                // Rotate the remainder over the other way
                let leftOver = rotation - (Z - charCode);
                rotatedCode = A + leftOver
            }
            output += String.fromCharCode(rotatedCode)
        }
        // If char is not a letter add it as-is
        else output += char;
    }
    return output
}