const findAverage = (givenArrayObject) => {
	let sum = 0
  let objectLength = givenArrayObject.length
  for(let i=0; i < objectLength; i++) {
  	sum = sum + parseInt(givenArrayObject[i].age)
  }
  return sum/objectLength
}


let secondWay = (num) => {
	return num.reduce((prev, element) => prev + element.age, 0)/num.length; 
}
const givenArrayObject = [
  	{
    	name: "Ramen",
      age: 45
    },
    {
    	name: "John",
      age: 63
    },
    {
    	name: "Abinash",
      age: 65
    },
    {
    	name: "Max",
      age: 27
    },
    {
    	name: "Nicola",
      age: 33
    },
    {
    	name: "Andrew",
      age: 87
    },
  ]

console.log(findAverage(givenArrayObject))
console.log(secondWay(givenArrayObject))
