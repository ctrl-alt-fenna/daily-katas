import { addUp } from "."
test ("addUp(13) should equal 91", () => {
    expect (addUp(13)).toBe(91)
});
test ("addUp(4) should equal 10", () => {
    expect (addUp(4)).toBe(10)
});
test ("addUp(600) should equal 180300", () => {
    expect (addUp(600)).toBe(180300)
});