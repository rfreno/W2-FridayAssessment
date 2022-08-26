///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, curr) => total + curr.price, 0)
// console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal += cartTotal * tax
    cartTotal -= couponValue
    return cartTotal
}
// console.log(calcFinalPrice(summedPrice,10,.06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer Properties:
    - First Name - Names confirm the customer who owns the cart
    - Last Name 
    - Street Address - Street Address is used for card billing and delivery
    - Zip Code - Zip Code is used to verify deliverability
    - Credit Card Number - Vital to get paid for the orders in the cart 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let currentCustomer = {
    firstName : 'Nathan',
    lastName : 'Winters',
    streetAddress : '123 Main St. Anytown, USA',
    zipCode : '98765',
    cardNumber : '1234 5678 9123 4567'
}
