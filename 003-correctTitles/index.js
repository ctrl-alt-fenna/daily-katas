export function correctTitle(str) {
    let copyStr = str.toLowerCase()
    const commaSpace = ', '
    const commaNoSpace = ','
    const dash = '-'
    copyStr = (copyStr.replaceAll(commaSpace, ',')).replaceAll(commaNoSpace, ', ')
    let strArr = copyStr.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].indexOf(dash) !== -1) {
            let x = strArr[i].split('-')
            let newx = ''
            for (const iterator of x) {
                if (iterator != 'the' && iterator != 'of' && iterator != 'and' && iterator != 'in') {
                newx += iterator[0].toUpperCase() + iterator.substring(1) + "-"
            } else {
                newx+= iterator + '-'
            }
            strArr[i] = newx.slice(0, -1)

        }
    }
        else {
            if (strArr[i] != undefined && strArr[i] != 'the' && strArr[i] != 'of' && strArr[i] != 'and' && strArr[i] != 'in') {
                strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1)
            }
        }
    }
    copyStr = strArr.join(" ")
    if (copyStr[copyStr.length - 1] != '.') copyStr += '.'
    return copyStr
}