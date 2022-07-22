import {
    correctTitle
} from ".";
test("Fancy of the woods", () => {
    expect(correctTitle('TYRION LANNISTER, HAND OF THE QUEEN.')).toBe('Tyrion Lannister, Hand of the Queen.');
});
test("correctTitle('sansa stark,lady of winterfell.')", () => {
    expect(correctTitle('sansa stark,lady of winterfell.')).toBe("Sansa Stark, Lady of Winterfell.")
});
test('correctTitle("jOn SnoW, kINg IN thE noRth")', () => {
    expect(correctTitle("jOn SnoW, kINg IN thE noRth")).toBe("Jon Snow, King in the North.")
});
test("'Mance Rayder, King-Beyond-the-Wall.', instead got: 'Mance Rayder, King Beyond-the-wall.'", () => {
    expect(correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL.")).toBe("Mance Rayder, King-Beyond-the-Wall.")
});