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
    return (word.length % 2 == 0)
}

function usePivot(wordSection, side, centerLocation = 0) {
    let elasticWord = ""
    if (side == 'l') {
        let letterLocation = 1
        for (var letter of wordSection) {
            for (let i = 0; i < letterLocation; i++) {
                elasticWord += wordSection.at(letterLocation - 1);
            }
            letterLocation++;
        }
    } else if (side == 'r') {
        let sideLocation = wordSection.length
        let letterLocation = 0
        for (var letter of wordSection) {
            for (let x = sideLocation; x > 0; x--) {
                elasticWord += wordSection.at(letterLocation);
            }
            sideLocation--;
            letterLocation++;
        }
    } else {
        for (let x = 0; x < centerLocation; x++) {
            elasticWord += wordSection
        }
    }
    return elasticWord
}