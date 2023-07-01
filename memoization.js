const findSum = (n) => {
	let result = 0
  for(let i = 1; i <= n; i++) {
  	result = result + i
  }
  return result
}

const memoize = (fun) => {
let cache = {}
	return function(...args) {
  	let n = args[0];
    if(n in cache) {
    	return cache[n]
    } else {
    	let result = fun(n)
      cache[n] = result
      return result
    }
  }
}

const t0 = performance.now();
const eficient = memoize(findSum)
console.log(eficient(5));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
const t3 = performance.now();
const eficient2 = memoize(findSum)
console.log(eficient2(500));
const t4 = performance.now();
console.log(`Call to doSomething took ${t4 - t3} milliseconds.`);
