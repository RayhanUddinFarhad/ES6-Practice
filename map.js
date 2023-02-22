const array = [5, 4, 5, 6, 7, 8, 9, 10]

const newarr= array.map (arr => arr*2)



// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.
const odd = [ 1, 3, 5, 7, 9 ];

const even = odd.map (convert => convert+1)

//with for each

const odd1 = [ 1, 3, 5, 7, 9 ];

const even1 = even.forEach (convert => convert+1)
console.log(even1)

