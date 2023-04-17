// check every letter of the string with a for loop and check if is a, e, i, o, u and add to a variable  + 1 if not add to an another variable + 1 to count how many consonants and vowels

function checkVowelConsonant(string){
    let consonants = 0
    let vowels = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            vowels++
        }else{
            consonants++
        }
    }
    console.log(`${string} has ${consonants} consonants and ${vowels} vowels`)
}
checkVowelConsonant("hello")
checkVowelConsonant("ukelele")
checkVowelConsonant("awesome")
checkVowelConsonant("onomonopia")
checkVowelConsonant("textbook")