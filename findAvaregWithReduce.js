const given = [
  	{
    	name: "Ramen",
      age: 45,
      married: true
    },
    {
    	name: "John",
      age: 63,
      married: false
    },
    {
    	name: "Abinash",
      age: 65,
      married: true
    },
    {
    	name: "Max",
      age: 27,
      married: false
    },
    {
    	name: "Nicola",
      age: 33,
      married: true
    },
    {
    	name: "Andrew",
      age: 87,
      married: true
    },
  ]
  
  const findAverageAge = (given) => {
  	return given.reduce((sum, item) => sum = sum + item.age, 0)/given.length
  }
  
  console.log(findAverageAge(given))
