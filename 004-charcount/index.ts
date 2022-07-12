export function charCount(character, str)
{
    let count = 0
    if (character.length > 1 || character.length < 1) throw new TypeError("Character length invalid")
    for (const c of str) if (c === character) count++
    return count
}