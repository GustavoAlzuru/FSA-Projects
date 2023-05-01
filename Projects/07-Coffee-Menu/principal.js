const coffeMenu = require('./coffee_data.js')

const drinks = []
const drinksLess5 = []
const evenPrices = []
let totalEach = 0
const areSeasonal = []

for(let i = 0; i < coffeMenu.length; i++){
    drinks.push(coffeMenu[i].name)
    if(coffeMenu[i].price <= 5) drinksLess5.push(coffeMenu[i].price)
    if(coffeMenu[i].price % 2 == 0) evenPrices.push(coffeMenu[i].price)
    totalEach += coffeMenu[i].price
    if(coffeMenu[i].seasonal) areSeasonal.push(coffeMenu[i].name)
}
console.log(`All drinks: ${drinks}`)
console.log(`Drinks that cost less than 5: ${drinksLess5}`)
console.log(`Drinks that are priced at an even number: ${evenPrices}`)
console.log(`the total of one of every drink: ${totalEach}`)
console.log(`drinks that are seasonal: ${areSeasonal}`)

for(let i = 0; i < areSeasonal.length; i++){
    areSeasonal[i] = areSeasonal[i] + ' with imported beans'
}

// Drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

console.log(areSeasonal)

