import { menuArray } from "./data.js";

const mainSecttion = document.getElementById('main-part')

let pizzaCount = 0
let burgerCount = 0
let drinkCount = 0

// Even listener

document.addEventListener('click', handleClick)

function handleClick(e) {
    console.log(e.target.id)
}

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
mainSecttion.innerHTML = renderHtml(menuArray)