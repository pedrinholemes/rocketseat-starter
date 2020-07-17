const input = {
    name: document.querySelector('input.name'),
    age: document.querySelector('input.age')
}
const button = document.querySelector('button')
const list = document.querySelector('ul')
var verificado = []

function verificar(user) {
    return new Promise(function(resolve, reject) {
        if (user.age >= 18) {
            return setTimeout(() => resolve(true), 2000)
        } else if (user.age < 18) {
            return setTimeout(() => reject(false), 2000)
        }

    })
}

function renderTrue(user) {
    const li = document.createElement('li')
    li.setAttribute('class', 'aprovado')
    const text = document.createTextNode(`Nome: ${user.name} - Idade: ${user.age} - Aprovado`)
    li.appendChild(text)
    list.appendChild(li)
}

function renderFalse(user) {
    const li = document.createElement('li')
    li.setAttribute('class', 'naoaprovado')
    const text = document.createTextNode(`Nome: ${user.name} - Idade: ${user.age} - Não Aprovado`)
    li.appendChild(text)
    list.appendChild(li)
}

button.addEventListener('click', e => {
    const user = {
        name: input.name.value,
        age: input.age.value
    }
    verificar(user).then(data => {
        user.aprovado = data
        console.log(user)
        verificado.push(user)
        renderTrue(user)
    }).catch(data => {
        user.aprovado = data
        console.log(user)
        verificado.push(user)
        renderFalse(user)
    })
})

document.body.onkeypress = e => {
    if (e.code == 'Enter') {
        button.click()
    }
}