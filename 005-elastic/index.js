export function elasticize(word) {
    let left = word.substring(0, word.length / 2);
    let right, center = ""
    if (isEven(word)) right = word.substring(word.length / 2)
    else {
        center = word.at(word.length / 2)
        right = word.substring(word.length / 2 + 1)
    }
    left = usePivot(left, 'l')
    right = usePivot(right, 'r')
    if (center != "") center = usePivot(center, 'c', Math.ceil((word.length / 2)))
    let outP = left + center + right
    return outP
}

function isEven(word) {
    return (word.length % 2 === 0)
}

function usePivot(wordSection, side, centerLocation = 0) {
    let elasticWord = ""
    if (side === 'l') {
        let letterLocation = 1
        for (var letter of wordSection) {
            elasticWord += letter.repeat(letterLocation)
            letterLocation++;
        }
    } else if (side === 'r') {
        let sideLocation = wordSection.length
        for (var letter of wordSection) {
            elasticWord += letter.repeat(sideLocation)
            sideLocation--;
        }
    } else elasticWord += wordSection.repeat(centerLocation)
    return elasticWord
}