import { menuArray } from "./data.js";

const mainSection = document.getElementById('main-part')
const orderSection = document.getElementById('order-part')
const totalPrice = document.getElementById('customer-price')
const orderedPizza = document.getElementById('ordered-pizza')
const pizzaCost = document.getElementById('pizza-cost')
const orderedBurger = document.getElementById('ordered-burger')
const burgerCost = document.getElementById('burger-cost')
const orderedDrink = document.getElementById('ordered-drink')
const drinkCost = document.getElementById('drink-cost')

const completeOrder = document.querySelector('#complete-order')
const cancelForm = document.querySelector('#cancel')
const payForm = document.querySelector('#pay-form')

const pizzaPrice = menuArray[0].price
const burgerPrice = menuArray[1].price
const drinkPrice = menuArray[2].price

let pizzaCount = 0
let burgerCount = 0
let drinkCount = 0
// let totalCount = pizzaCount+burgerCount+drinkCount


//hiding and showing payment form
cancelForm.addEventListener('click', ()=>payForm.classList.add('show-form'))
completeOrder.addEventListener('click', ()=>payForm.classList.remove('show-form'))

// Even listener

document.addEventListener('click', handleClick)

function handleClick(e) {
    let id = Number(e.target.id)
    if(e.target.dataset.remove){
        handleRemove(e.target.dataset.remove)
    }
    if(id===1){
        ++pizzaCount
        renderOrder({pizzaCount,burgerCount,drinkCount})
    } else if (id===2){
        ++burgerCount
        renderOrder({pizzaCount,burgerCount,drinkCount})
    } else if (id===3){
        ++drinkCount
        renderOrder({pizzaCount,burgerCount,drinkCount})
    }

}
//handles removes

function handleRemove(data){
    if(data==='pizza'){
        pizzaCount = 0
        orderedPizza.classList.add('show-pizza')
    } else if(data==='hamburger'){
        burgerCount=0
        orderedBurger.classList.add('show-burger')
    } else if (data==='drink'){
        drinkCount=0
        orderedDrink.classList.add('show-drink')
    }
    renderOrder({pizzaCount,burgerCount,drinkCount})
}

// Showing items ordered
function renderOrder(obj){
    if(obj.pizzaCount|| obj.burgerCount || obj.drinkCount){
        orderSection.classList.remove('order-part-show')
        if(obj.pizzaCount){
            orderedPizza.classList.remove('show-pizza')
            pizzaCost.textContent = `$${pizzaCount*pizzaPrice}`
            // totalPrice.textContent = `$${pizzaCount*pizzaPrice+burgerCount*burgerPrice+drinkCount*drinkPrice}`
        }
        if(obj.burgerCount){
            orderedBurger.classList.remove('show-burger')
            burgerCost.textContent = `$${burgerCount*burgerPrice}`
            // totalPrice.textContent = `$${pizzaCount*pizzaPrice+burgerCount*burgerPrice+drinkCount*drinkPrice}`
        } 
        if (obj.drinkCount){
            orderedDrink.classList.remove('show-drink')
            drinkCost.textContent = `$${drinkCount*drinkPrice}`
        }
        totalPrice.textContent = `$${pizzaCount*pizzaPrice+burgerCount*burgerPrice+drinkCount*drinkPrice}`
    } else {
        totalPrice.textContent = ``
        orderSection.classList.add('order-part-show')
    }
}

// Renders items from data
function renderHtml(arr){
    let htmlString = ''

    htmlString = arr.map(item=>{
        let ingredient = item.ingredients.join(', ')
        return `
        <div class="item">
                <div class="item-left">
                    <img src="${item.emoji}" alt="picture of ${item.name}" class="icon"
                    />
                    <div class="item-details">
                        <h2 class="food-title">${item.name}</h2>
                        <p class="ingredients">${ingredient}</p>
                        <h3 class="price">$${item.price}</h3>
                    </div>
                </div>
                <div class="btn-container">
                    <button class="plus-btn" id="${item.id}">+</button>
                </div>
            </div>
        `}).join('')

    return htmlString
}
mainSection.innerHTML = renderHtml(menuArray)