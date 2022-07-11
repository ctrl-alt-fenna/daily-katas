export function correctTitle(str) {
    let copyStr = str.toLowerCase()
    copyStr = (copyStr.replaceAll(', ', ',')).replaceAll(',', ', ').replaceAll('-', ' ')
    let strArr = copyStr.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] != undefined && strArr[i] != 'the' && strArr[i] != 'of' && strArr[i] != 'and' && strArr[i] != 'in') {
            strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1)
        }
    }
    copyStr = strArr.join(" ")
    if (copyStr[copyStr.length - 1] != '.') copyStr += '.'
    return copyStr
}