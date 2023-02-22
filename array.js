// //a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result


const array = ['Rayhaan', 'Maruf', "Emon"]

function arrays(arr) {
    let even = []




    for (let i = 0; i < array.length; i++) { 


        const element = array[i]
    
    
        if (element.length % 2 == 0) {
    
            
    
            even.push(element)
    
        }
    
    
    
    
    }
    return even;

}

console.log (arrays (array));



// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.


const arrow = (array1) => {


    let sum = 0;

   const element1 = array1.reduce((sqrt) => Math.pow (sqrt), 0)

   return element1
        
    




 }

 const sqarray = [5, 3, 6]
 console.log (arrow (sqarray))




// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result


let array1 =  [4,4,5,6,7,8,9,10]
let array2 = [6,2,9,3,8]

const newArray = (arr1,  arr2) => {

    const news = [...arr1, ...arr2]

    const result= Math.max(...news)

    return result;




}






const checkEvenLength = (arrOfFriends) => {
    //write your code here
    const news = arrOfFriends.filter(friend => friend.length %2==0)

    return news;
    }

    const friends = ['John', 'James', 'Jane', 'Ratul']
    console.log(checkEvenLength(friends))



