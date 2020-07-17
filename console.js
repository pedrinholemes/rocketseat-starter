const title = document.createElement('h1')
const ul = document.createElement('ul')
const style = document.createElement('style')
const div = document.createElement('div')

const renderConsole = (t) => {
    const li = document.createElement('li')
    console.log(t)
    li.innerText = t
    ul.appendChild(li)
};

title.innerText = "Console:"
style.innerText = `html {width: 100%;} ul {list-style: none;} ul li {margin-bottom: 12px;word-wrap: break-word;}`
div.classList = "console"

div.append(title)
div.append(ul)
document.head.append(style)
document.body.appendChild(div)