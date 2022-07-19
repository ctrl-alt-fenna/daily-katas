export function isValidIP(ipstr)
{
    let ans = false 
    const splitIP = ipstr.split('.')
    if (splitIP.length !== 4) return false
    for (const num of splitIP) {
        if (num[0] !== '0' && (num >= 1 && num < 255)) ans = true
        else return false
    }
    return ans
}