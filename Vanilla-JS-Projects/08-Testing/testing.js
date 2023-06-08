// Unit testing => Expect [action] to be [some result]
// Functional test => When a user [does something with some parameters], [some thing should happen]

// Expect multiplication(2, 3) to be 6
const multiplication = (a, b) => a * b
console.log(multiplication(2, 3))

//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
//Expect concatOdds("a string" || {} || 12, [1,4,2] || [1, "2", 3]) to be "You must pass an array of numbers"
//Expect concatOdds([], [9, 2, -1, 3]) to be [9, -1, 3]

const concatOdds = (a, b) => {
    const error = 'You must pass an array of numbers'
    //checking if the both parameters are arrays
    if(Array.isArray(a) && Array.isArray(b)){
        //checking if every number inside the array are type number
        if(a.every(number => typeof number === 'number' && b.every(number => typeof number === 'number'))){
            const result = []
            const concatArray = a.concat(b)
            //filter to get the odd numbers
            const odds = concatArray.filter(numbers => numbers % 2 !== 0 )
            //sorting the numbers
            odds.sort((a, b) => a - b)
            for(let i = 0; i < odds.length; i++){
                //checking if the number is already in the new array
                if(!result.includes(odds[i])){
                    result.push(odds[i])
                }
            }
            return result
        }else{
            return error
        }
    }else{
        return error
    }

}
console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]))

//Functional Testing

//A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

// When users checkout when cart is empty shown a message Empty Cart
// When users checkout when cart has products as a guest shown log in page and a button create account
// When users checkout when cart has products as a logged-in user shown form with all inputs(address, name, payment)
