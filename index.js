import { menuArray } from "./data.js";

/* consts html elemens */
const mainEl = document.querySelector('#main-app')
// document.getElementById('shadow-host-companion').style.border = 'none'


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
                            <p class="add-minus">+</p>
                            <p class="add-minus">-</p>
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