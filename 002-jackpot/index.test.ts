import { testJackpot } from ".";
test ("testJackpot(['@', '@', '@', '@']) should equal true", () => {
    expect(testJackpot(['@','@','@','@'])).toBe(true)
})
test ("testJackpot(['abc', 'abc', 'abc', 'abc']) should equal true", () => {
    expect(testJackpot(['abc','abc','abc','abc'])).toBe(true)
})
test ("testJackpot(['SS', 'SS', 'SS', 'SS']) should equal true", () => {
    expect(testJackpot(['SS','SS','SS','SS'])).toBe(true)
})
test ("testJackpot(['&&', '&', '&&&', '&&&&']) should equal false", () => {
    expect(testJackpot(['&&', '&', '&&&', '&&&&'])).toBe(false)
})
test ("testJackpot(['SS', 'SS', 'SS', 'Ss']) should equal false", () => {
    expect(testJackpot(['SS', 'SS', 'SS', 'Ss'])).toBe(false)
})
test ("testJackpot(['x', 'x', 'x']) should throw error", () => {
    expect(() => testJackpot(['x','x','x'])).toThrow('Jackpot entry must have 4 items')
})