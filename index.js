import { menuArray } from "./data.js";

/* consts html elemens */
const mainEl = document.querySelector('#main-app')

/* item ordered count */

let pizzaCount = 0
let burgerCount = 0
let shakeCount = 0
let totalCount = pizzaCount + burgerCount + shakeCount

document.addEventListener('click', handleClick)

function handleClick(e){
    if(e.target.dataset.add || e.target.dataset.minus){
        changeItemCount(e.target.dataset)
    }
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
            shakeCount > 0 ? shakeCount-- : 0
        }
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