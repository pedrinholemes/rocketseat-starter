const userName = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('ul')
var repos = []
var users = []
document.querySelectorAll('button')[1].style.opacity = '0'
button.addEventListener('click', e => {
    if (users.indexOf(userName.value) == -1) {
        axios.get(`https://api.github.com/users/${userName.value}/repos`).then(res => {
            users.push(userName.value)
            var data = res.data
            render(data)
            userName.value = ''
            document.querySelectorAll('button')[1].style.opacity = '100'
        }).catch(err => {
            if (errorCode(err) == 404) alert('Usuario Não Encontrado')
            else alert(err)
        })
    } else alert('Usuario Ja listado')
})

function errorCode(err) {
    return err.toString()[err.toString().length - 3] + err.toString()[err.toString().length - 2] + err.toString()[err.toString().length - 1]
}

function renderRepo(repo) {
    const repoText = {
        id: repo.id,
        name: repo.full_name,
        href: repo.html_url,
        user: repo.owner.login
    }
    repos.push(repoText)
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener noreferrer')
    a.setAttribute('href', repoText.href)
    li.setAttribute('data-id', repoText.id)
    a.appendChild(document.createTextNode(repoText.name))
    li.appendChild(a)
    list.appendChild(li)
}

function render(repos) { for (const repo of repos) renderRepo(repo) }


document.querySelectorAll('button')[1].addEventListener('click', () => {
    users = []
    repos = []
    list.innerHTML = ''
    document.querySelectorAll('button')[1].style.opacity = '0'
})

document.body.onkeypress = e => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') return button.click()

    if (document.querySelectorAll('button')[1].style.opacity == '100' && e.key == '') return document.querySelectorAll('button')[1].click()

}