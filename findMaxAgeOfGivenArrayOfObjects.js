const given = [
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

const findMaxAge = (given) => {
	return Math.max(...given.map((item) => item.age))
}


console.log(findMaxAge(given))
