require("dotenv").config
const express = require('express')
const Joi = require('joi')
const{v4:uuidv4} = require('uuid')



const getOrders = ((req,res) => {

})



const calculateOrders = ((req,res) => {

    const stock = {
        1: {product:"Dettol soap",
            price: 200},
        2: {product: "Juice",
            price: 550},
        3: {product: "Body cream",
            price: 2000},
        4: {product: "Plantain chips",
            price: 2500},
        5: {product: "Crispy Chicken",
            price: 1250},
        6: {product: "Chocolate",
            price: 120},
        7: {product: "Plantain",
            price : 300
        }
    };
    
    // let purchases = {}
    // let units = {}
    // let invoiceTotal = 0
    let total = 0
    let invoiceTotal = 0
    //let purchaseDetail = []
    //let purchases = {}
    let purchasedItem = []
    let productCost = []
    
    let numberOfUnitsPurchased
    let userProductChoice = Number(prompt("Hello, Welcome to Spar Supermarket, Yaba. \nKindly select(1-7) from the list of items to purchase, \nand press 0 to display the invoice. \n \n1. Dettol soap - #200 \n2. Juice - #550 \n3. Body Cream - #2000 \n4. Plantain chips - #2500 \n5. Crispy Chicken - #1250 \n6. Chocolate - #120 \n7. Plantain - #300 \n0. Exit"))
    while(Number.isNaN(userProductChoice)|| userProductChoice > 7 || userProductChoice < 0) {
        userProductChoice = Number(prompt("Input can only be a number (0-7). \nKindly select(1-7) from the list of items to purchase, \nand press 0 to display the invoice. \n \n1. Dettol soap - #200 \n2. Juice - #550 \n3. Body Cream - #2000 \n4. Plantain chips - #2500 \n5. Crispy Chicken - #1250 \n6. Chocolate - #120 \n7. Plantain - #300 \n0. Exit"))
    }
    
    while((userProductChoice >=1 && userProductChoice <=7)) {
        
        //purchases[userProductChoice] = stock[userProductChoice]
        numberOfUnitsPurchased = Number(prompt(`Please how many units of ${stock[userProductChoice].product}?)`)
        //units[userProductChoice] = numberOfUnitsPurchased
        total = numberOfUnitsPurchased * stock[userProductChoice].price
        console.log(`You added ${numberOfUnitsPurchased} units of ${stock[userProductChoice].product} to your cart. \nKindly select(1-7) from the list of items to purchase, \nand press 0 to display the invoice. \n \n1. Dettol soap - #200 \n2. Juice - #550 \n3. Body Cream - #2000 \n4. Plantain chips - #2500 \n5. Crispy Chicken - #1250 \n6. Chocolate - #120 \n7. Plantain - #300 \n0. Exit`)
        //purchases.item = stock[userProductChoice].product
        let itemDetail = stock[userProductChoice].product // + " (" + numberOfUnitsPurchased + " units)"
        purchasedItem.push(itemDetail)
        //purchases.productTotal = total
        productCost.push(total)
        //Object.freeze(purchases)
        //purchaseDetail.push(purchases)
        userProductChoice = Number(prompt("Kindly select(1-7) from the list of items to purchase, \n and press 0 to display the invoice. \n \n1. Dettol soap - #200 \n2. Juice - #550 \n3. Body Cream - #2000 \n4. Plantain chips - #2500 \n5. Crispy Chicken - #1250 \n6. Chocolate - #120 \n7. Plantain - #300 \n0. Exit)")
        while(Number.isNaN(userProductChoice)|| userProductChoice > 7 || userProductChoice < 0) {
            userProductChoice = Number(prompt("Input can only be a number (0-7). \nKindly select(1-7) from the list of items to purchase, \nand press 0 to display the invoice. \n \n1. Dettol soap - #200 \n2. Juice - #550 \n3. Body Cream - #2000 \n4. Plantain chips - #2500 \n5. Crispy Chicken - #1250 \n6. Chocolate - #120 \n7. Plantain - #300 \n0. Exit"))  
        }
    }
    if(userProductChoice === 0) {
        console.log("Thank you for shopping with us. Below is your invoice: \n Items  -  Cost")
        printPurchaseDetails()
        console.log(`Total =   N${printInvoice()}`)
    }
    
    function getUserProductChoice(num) {
    
    }
    
    
    function getNumberofItemPurchased(num) {
    
    }
    
    function printPurchaseDetails() {        
        //for (key in purchases) {
        for (i in purchasedItem) {
          console.log(`${purchasedItem[i]}  -      N${productCost[i]}`)
        }
        return
    }
    
    function printInvoice() {
        //for (key in purchases) {
        for (i in purchasedItem) {
            invoiceTotal += productCost[i]
        }    
        //}    
        return invoiceTotal
    }
    
    

})




module.exports = {
    getOrders,
    calculateOrders
}