import { timeForMilkAndCookies } from "../time-for-milk";
test("Expected timeForMilkAndCookies(2013,11,23) to equal true", () => {
    expect(timeForMilkAndCookies(2013,11,23)).toBe(true)
});
test("Expected timeForMilkAndCookies(1994,12,24) to equal false", () => {
    expect(timeForMilkAndCookies(1994,12,24)).toBe(false)
});