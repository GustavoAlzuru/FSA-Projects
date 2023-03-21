// assign a constant variable a <p> tag with the class 
const codeText = document.querySelector('.code-text')

// three variables with different operators to get a unique combination
const firstCombination = 2 * 5
const secCombination = 80 / 2
const thirdCombination = 10 + 30 - 1

const codePhrase = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${firstCombination} - ${secCombination} - ${thirdCombination}`

codeText.textContent = codePhrase