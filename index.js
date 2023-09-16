import { menuArray } from "./data.js";

/* consts html elemens */
const mainEl = document.querySelector('#main-app')
const orderedItemsEl = document.querySelector('#ordered-items')
const pizzaItem = document.querySelector('#pizza-item')
const burgerItem = document.querySelector('#burger-item')
const shakeItem = document.querySelector('#shake-item')
const totalPriceEl = document.querySelector('#price-total')
const paymentDiv = document.querySelector('#payment-div')
const paymentForm = document.querySelector('#payment-form')
const thankyouEl = document.querySelector('#thank-you-div')
const cancelButton = document.querySelector('#cancel')

/* item ordered count */

let pizzaCount = 0
let burgerCount = 0
let shakeCount = 0
let totalCount = pizzaCount + burgerCount + shakeCount

/* adding event listeners */
document.addEventListener('click', handleClick)
paymentForm.addEventListener('submit', handlePayment)
cancelButton.addEventListener('click', cancelPayment)


/* Displaying and showing orderd items div */

function handleClick(e){
    if(e.target.dataset.add || e.target.dataset.minus){
        changeItemCount(e.target.dataset)
    } else if(e.target.dataset.remove){
        removeItem(e.target.dataset.remove)
    } else if (e.target.dataset.complete){
            completeOrder()
    }
}

/* complete order and pay */

function completeOrder(){
    paymentDiv.classList.remove('hiding')
}

/* payment form submit and cancel*/
function handlePayment(e){
    e.preventDefault()
    
    const userData = new FormData(paymentForm)
    const name = (userData.get('name'))
    thankyouEl.innerHTML = `<h3>Thank, ${name}! Your order is on its way!</h3>`
    paymentDiv.classList.add('hiding')
    reset()
}

function cancelPayment(){
    paymentDiv.classList.add('hiding')
}


function reset(){
    thankyouEl.classList.remove('hiding')
    paymentForm.reset()
    pizzaCount=0
    shakeCount=0
    burgerCount=0
    orderedItemsEl.classList.add('hiding')
}

/* handling adding, subtracting, removing */

function changeItemCount(value) {
    if(value.add){
        let id = parseInt(value.add)
        if(id===0){
            pizzaCount++
        } else if(id===1){
            burgerCount++
        } else {
            shakeCount++
        }
    } else {
        let id = parseInt(value.minus)
        if(id===0){
            pizzaCount > 0? pizzaCount-- : 0
        } else if(id===1){
            burgerCount > 0? burgerCount-- :0
        } else {
            shakeCount >0 ? shakeCount-- : 0
        }
    }

    totalCount = pizzaCount + burgerCount + shakeCount
    
    if(totalCount){
        thankyouEl.classList.add('hiding')
        orderedItemsEl.classList.remove('hiding')
    } else orderedItemsEl.classList.add('hiding')

    showOrderedItems()
}

function removeItem(value){
    if(value==='pizza'){
        pizzaCount=0
    } else if(value==='burger'){
        burgerCount=0
    } else shakeCount=0
    if(pizzaCount===burgerCount && burgerCount===shakeCount && shakeCount===0){
        orderedItemsEl.classList.add('hiding')
    }
    showOrderedItems()
}

function showOrderedItems(){
    if(pizzaCount>0){
        let pizzahtml = `
            <div class="item-of-order-name">
                <h3>Pizza</h3>
                <p data-remove="pizza">remove</p>
            </div>
            <p>$${14*pizzaCount}</p>
        `
        pizzaItem.innerHTML = pizzahtml
    } else pizzaItem.innerHTML = ''
    if(burgerCount>0){
        let burgerhtml = `
            <div class="item-of-order-name">
                <h3>Hamburger</h3>
                <p data-remove="burger">remove</p>
            </div>
            <p>$${12*burgerCount}</p>
        `
        burgerItem.innerHTML = burgerhtml
    } else burgerItem.innerHTML =''

    if(shakeCount>0){
        let shakehtml = `
            <div class="item-of-order-name">
                <h3>Shake</h3>
                <p data-remove="shake">remove</p>
            </div>
            <p>$${7*shakeCount}</p>
        `
        shakeItem.innerHTML = shakehtml
    } else shakeItem.innerHTML =''

    if(totalCount>0){
        totalPriceEl.textContent = `$${pizzaCount*14+burgerCount*12+shakeCount*7}`
    }
}


function getAppHtml(){
    let html=``
    html = menuArray.map(item=>{
        const ingredients = item.ingredients.join(', ')

        return `<div class='a-section'>
                    <p class="emoji">
                        ${item.emoji}
                    </p>
                    <div class="descriptions">
                        <div>
                            <h3>${item.name}</h3>
                            <p class="ingredients">${ingredients}</p>
                            <h3>$${item.price}</h3>
                        </div>
                        <div class="container-add-minus">
                            <p class="add-minus" data-add="${item.id}">+</p>
                            <p class="add-minus" data-minus="${item.id}">-</p>
                        </div>
                    </div>
                </div>`
    }).join('')

    return html
}










function render(){
    mainEl.innerHTML = getAppHtml()
}

render()