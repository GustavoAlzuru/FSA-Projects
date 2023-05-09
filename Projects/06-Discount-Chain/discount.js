//Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//calculate full price refill times price per refill
const price = (costumer) => costumer.refills * costumer.pricePerRefill

//if has subscription 25% discount on the full price if not return the full price with no changes
const hasSubscription = (costumer) => costumer.subscription ? price(costumer) - price(costumer) * 0.25 : price(costumer)

//if has coupon take the subscription result and take out 10 if not return the result of the subscription
const hasCoupon = (costumer) => costumer.coupon ? hasSubscription(costumer) - 10 : hasSubscription(costumer)

// return the total amount
const totalAmount = (costumer) => hasCoupon(costumer)

//call each customer
const totalTimmy = totalAmount(timmy)
const totalSarah = totalAmount(sarah)
const totalRocky = totalAmount(rocky)

//console.log the total for each
console.log(`Timmy your total grand is ${totalTimmy}`)  
console.log(`Sarah your total grand is ${totalSarah}`)  
console.log(`Rocky your total grand is ${totalRocky}`)  