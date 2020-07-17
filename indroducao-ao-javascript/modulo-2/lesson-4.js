const ul = document.querySelector('ul')
const input = document.querySelector('input')
var nomes = ["Diego", "Gabriel", "Lucas"]

function renderList(text) {
    const li = document.createElement('li')
    li.innerText = text
    ul.appendChild(li);
}
document.body.onkeypress = e => {
    if (e.code == 'Enter') {
        document.querySelector('button').click()
    }
}

document.querySelector('button').addEventListener('click', () => {
    const text = input.value
    nomes.push(text)
    input.value = ''
    renderList(text)
})

nomes.forEach(element => {
    renderList(element)
});