import { menuArray } from "./data.js";

/* consts html elemens */
const mainEl = document.querySelector('#main-app')



function getAppHtml(){
    let html=``
    html = menuArray.map(item=>{
        const ingredients = item.ingredients.join(', ')

        return `<section>
                    <div class="emoji">
                        ${item.emoji}
                    </div>
                    <div class="descriptions">
                        <div>
                            <h2>${item.name}</h2>
                            <p class="ingredients">${ingredients}</p>
                            <h3>$${item.price}</h3>
                        </div>
                        <div class="container-add-minus">
                            <p class="add-minus">+</p>
                            <p class="add-minus">-</p>
                        </div>
                    </div>
                </section>`
    }).join('')

    return html
}










function render(){
    mainEl.innerHTML = getAppHtml()
}

render()