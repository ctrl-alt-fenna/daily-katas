import {
    elasticize
} from "."
test('elasticize("ANNA") should output ANNNNA', () => {
    const word = "ANNA"
    const expected = "ANNNNA"

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});
test('elasticize("AB") should output AB', () => {
    const word = "AB"
    const expected = "AB"

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});
test('elasticize("KAYAK") should output KAAYYYAAK', () => {
    const word = "KAYAK"
    const expected = "KAAYYYAAK"

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});
test('elasticize("X") should output X', () => {
    const word = "X"
    const expected = "X"

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});
test('elasticize("FLUFFY") should output FLLUUUFFFFFY', () => {
    const word = "FLUFFY"
    const expected = "FLLUUUFFFFFY"

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});
test('elasticize("ABC") should output ABC', () => {
    const word = "ABC"
    const expected = "ABBC"

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});
test('elasticize("") should output nothing', () => {
    const word = ""
    const expected = ""

    const actual = elasticize(word)
    expect(actual).toBe(expected)
});