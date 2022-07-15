function grantTheHint(sentence)
{
let arr = [""]
let words = sentence.split(" ")
let copy = sentence.split(" ")
let maxLength = copy.sort(function(a,b){return b.length - a.length})[0].length
let i = 0
let count = 0
while (i <= maxLength)
{
    count = 0
    arr[i] = ""
    for (const word of words)
    {
        if (i >= word.length) arr[i] += word
        else {
            arr[i] += word.substring(0,i) + "_".repeat(word.length - i)
        }
        arr[i] += " "
    }
    arr[i] = arr[i].trim()
    i++;
}
for (const iterator of arr) {
    console.log(iterator)
}
return arr
}
grantTheHint("Mary Queen of Scots")