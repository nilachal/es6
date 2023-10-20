const findSum = (n) => {
	let result = 0 
  for (let i =0;  i <= n; i++) {
  	result += i
  }
  return result
}

const start = Date.now();

console.log(findSum(2599))
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);


const memoizeSum = (fun) => {
	let cache = {}
  return function(...args) {
  	let n = args[0]
    if(n in cache) {
    	return cache[n]
    } else {
    	console.log("not available in cache")
    	let result = fun(n)
      cache[n] = result
      return result
    }
  }
}

let memoSum = memoizeSum(findSum)

const start3 = Date.now();

console.log(memoSum(2599))
const end3 = Date.now();
console.log(`Execution time: ${end3 - start3} ms`);
