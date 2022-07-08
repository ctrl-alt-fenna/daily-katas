export function testJackpot(array)
{
if (array.length != 4) throw new Error ('Jackpot entry must have 4 items');
else {

    const firstItem = array[0]
    for (let i = 1; i < array.length; i++)
    {
        if (array[i] != firstItem) return false;
    }
    return true
}
} 