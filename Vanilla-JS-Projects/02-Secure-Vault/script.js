// Assign my variables to the DOM element I need
const codeText = document.querySelector('.code-text')
const fComb = document.querySelector('.firstCode')
const sComb = document.querySelector('.secondCode')
const tComb = document.querySelector('.thirdCode')
const form = document.querySelector('.form')
const textSmall = 'You need a smaller number'
const textBig = 'You need a bigger number'
let openVault = document.querySelector('.open-vault')

// Getting the three numbers the users put in the form with a formData
form.addEventListener('submit', (e) => {
    e.preventDefault()
    codeText.textContent = ''
    fComb.textContent = ''
    sComb.textContent = ''
    tComb.textContent = ''
    openVault.style.display = 'none'
    const formData = new FormData(form)
    const first = formData.get('code-1')
    const second = formData.get('code-2')
    const third = formData.get('code-3')
    if(!first || !second || !third){
        codeText.textContent = 'You have an empty space';
        return
    }
    if(first == 6 && second == 2 && third == 9){
        codeText.textContent = 'You get the exact combination now you can open the vault'
        openVault.style.display = 'inline'
        return
    }
    if(first > 6){
        fComb.textContent = textSmall
    }
    if(first < 6){
        fComb.textContent = textBig
    }
    if(second > 2){
        sComb.textContent = textSmall
    }
    if(second < 2){
        sComb.textContent = textBig
    }
    if(third > 9){
        tComb.textContent = textSmall
    }
    if(third < 9){
        tComb.textContent = textBig
    }
})
