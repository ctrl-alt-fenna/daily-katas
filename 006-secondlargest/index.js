export function secondLargest(arr) {
    let highest = 0
    let secondHighest = 0
        // Empty array check
    if (arr.length == 0) return 0
    else if (arr.length == 1) return arr[0]
    else {
        // Make new array of only unique values
        arr = [...new Set(arr)]

        // Array has only same values
        if (arr.length == 1) return 0
        else {
            for (const number of arr) {
                if (number > highest) {
                    // Swap secondhighest and highest, as now number is highest and highest is secondHighest
                    secondHighest = highest
                    highest = number

                } else if (number > secondHighest && number < highest) {
                    secondHighest = number
                }
            }
        }
        return secondHighest
    }

}