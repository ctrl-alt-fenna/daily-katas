export function countTrue(array)
{
    let trueCount = 0
    for (const iterator of array) {
        if (iterator == true) trueCount++
    }
    return trueCount
}