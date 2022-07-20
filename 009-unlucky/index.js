export function howUnlucky(year)
{
    if (isNaN(year)) throw new Error('Year must be a valid number!')
    let count = 0
    for (let i = 0; i < 12; i++)
    {
        let d = new Date(year, i, 13)
        if (d.getDay() === 5) count++;
    }
    return count
}