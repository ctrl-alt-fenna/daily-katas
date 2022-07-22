export function happyAlgorithm(currentNumber, steps = 0, oldNums = [currentNumber]) {
    if (currentNumber <= 1) return ("HAPPY " + (steps === 0 ? 1 : steps))
    else {
        const digits = getDigits(currentNumber);
        currentNumber = 0
        for (const digit of digits) {
            currentNumber += (digit ** 2);
        }
        steps++;
        if (oldNums.indexOf(currentNumber) !== -1) return ("SAD " +  steps);
        else{
            oldNums.push(currentNumber)
            return happyAlgorithm(currentNumber, steps, oldNums);
        } 
    }
}
function getDigits(number) {
    let digits = []
    while (number > 0) {
        digits.push(number % 10)
        number = Math.floor(number / 10)
    }
    return digits
}