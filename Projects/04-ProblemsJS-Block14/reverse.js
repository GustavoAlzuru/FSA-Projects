// loop the array and push at the beginning with unshift to a new array

function reverseArray(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.unshift(array[i])
    }
    console.log(newArray)
}
reverseArray([1, 2, 3])
reverseArray([1, 3, 5, 7, 9, 11])
reverseArray([20, 50, 30, 60, 200])
reverseArray([1, -1, 2, -3, 5, -8, 13])