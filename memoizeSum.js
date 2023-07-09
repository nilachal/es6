const normalFunction = (n) => {
	let sum = 0
  for(let i = 0; i < n; i++) {
  	sum = sum + i
  }
  return sum
}

const memoize = (fun) => {
	let cache = {}
  return function(...args) {
  	let n = args[0]
    if(n in cache) {
    	return cache[n]
    } else {
    	let result = fun(n)
      cache[n] = result
      return result
    }
  }
}

console.time("test_timer");
console.log(normalFunction(25));
console.timeEnd("test_timer");
console.time("test_timer");
const efficient = memoize(normalFunction)
console.log(efficient(5))
console.timeEnd("test_timer");
console.time("test_timer");
console.log(efficient(5))
console.timeEnd("test_timer");
