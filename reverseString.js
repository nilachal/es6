const reverseString = (str) => {
    if(!str) {
        return "Error"
    }
    let result = ""
    const stringLength = str.length
    for(let i = stringLength-1;  i >= 1; i--) {
        result = result + str[i]
        console.log(result)
    }
    return result
};


console.log(reverseString("hellow"))
