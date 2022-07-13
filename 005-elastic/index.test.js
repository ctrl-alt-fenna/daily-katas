import {
    elasticize
} from "."
// elasticize("ANNA") ➞ "ANNNNA" 

// elasticize("KAYAK") ➞ "KAAYYYAAK" 

// elasticize("X") ➞ "X"
test('elasticize("ANNA") should output ANNNNA', () => expect(elasticize("ANNA")).toBe("ANNNNA"));
test('elasticize("KAYAK") should output KAAYYYAAK', () => expect(elasticize("KAYAK")).toBe("KAAYYYAAK"));
test('elasticize("X") should output X', () => expect(elasticize("X")).toBe("X"));