// pass an array to a function and loop and check every case if the remainder divided by 2 is different than 0
// push if the value is true to a new array to store the results

function odds(arr){
    const newArray = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArray.push(arr[i])
        }
    }
    console.log(newArray)
}
odds([2, 4, 6, 8, 11, 20, 15, 22])
odds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
odds([70, 42, 55, 81, 21, 91, 34])
odds([2, 4, 6, 8, 10, 11, 12])