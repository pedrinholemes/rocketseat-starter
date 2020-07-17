const ul = document.querySelector('ul')
var nomes = ["Diego", "Gabriel", "Lucas"]

function renderList(text) {
    const li = document.createElement('li')
    li.innerText = text
    ul.appendChild(li);
}

nomes.forEach(element => {
    renderList(element)
});