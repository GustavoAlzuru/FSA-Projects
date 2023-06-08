// loop through 1 to 100
// if the remainder of the number divided by 3 and divided by 5 is 0 console.log fizzbuzz
// if the remainder of the number divided by 3 is 0 console.log fizz
// if the remainder of the number divided by 5 is 0 console.log buzz

for(let i = 3; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Fizzbuzz')
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else if(i % 5 === 0){
        console.log('Buzz')
    }
}