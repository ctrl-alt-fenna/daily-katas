import {
    elasticize
} from "."
test('elasticize("ANNA") should output ANNNNA', () => expect(elasticize("ANNA")).toBe("ANNNNA"));
test('elasticize("ANNA") should output AB', () => expect(elasticize("AB")).toBe("AB"));
test('elasticize("KAYAK") should output KAAYYYAAK', () => expect(elasticize("KAYAK")).toBe("KAAYYYAAK"));
test('elasticize("X") should output X', () => expect(elasticize("X")).toBe("X"));
test('elasticize("FLUFFY") should output FLLUUUFFFFFY', () => expect(elasticize("FLUFFY")).toBe("FLLUUUFFFFFY"));
test('elasticize("ABC") should output ABC', () => expect(elasticize("ABC")).toBe("ABBC"));
test('elasticize("") should output nothing', () => expect(elasticize("")).toBe(""));