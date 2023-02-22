// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

const array = [1, 9, 17, 22]

const output = array.reduce((prevoious, current) => prevoious + current, 0)

console.log(output)



// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.


const details = [{ name: 'Mina', age: 20 },
{ name: 'Mina', age: 15 },
{ name: 'Mina', age: 22 }]

const maps = details.map (details => details.age)
console.log(maps)
const reduce = maps.reduce((prevoious, current) => prevoious+current, 0);
console.log(reduce)