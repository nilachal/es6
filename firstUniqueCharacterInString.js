var firstUniqChar = function(s) {
    if(!s) {
    	return "-1"
    }
    let charObj = {}
    for(let i = 0; i < s.length; i++) {
      if(s[i] in charObj) {
        charObj[s[i]] = false
      } else {
        charObj[s[i]] = true
      }    	
    }
    const firstTrueElement = (chr) => {
    	return charObj[chr] === true
    }
    const firstCharacter = Object.keys(charObj).find(firstTrueElement)
    console.log(firstCharacter)
    return s.indexOf(firstCharacter)
    
};

console.log(firstUniqChar('leetcode'))
