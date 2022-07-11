import { countTrue } from ".";
test ("countTrue([true, false, false, true, false]) should equal 2", () => {
    expect(countTrue([true, false, false, true, false])).toBe(2);
});
test ("countTrue([false, false, false, false]) should equal 0", () => {
    expect(countTrue([false, false, false, false])).toBe(0);
});
test ("countTrue([]) should equal 0", () => {
    expect(countTrue([])).toBe(0);
});