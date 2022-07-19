export function isValidIP(ipstr)
{
    const splitIP = ipstr.split('.')
    if (splitIP.length !== 4 || ipstr.endsWith('0')) return false
    for (const num of splitIP) {
        if (num[0] === '0' || (num < 1 || num > 255)) return false;
    }
    return true
}