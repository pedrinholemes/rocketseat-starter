const userName = document.querySelector('input.username')
const repoName = document.querySelector('input.repo')
const buttonUser = document.querySelector('button.username')
const buttonRepo = document.querySelector('button.repo')
const list = document.querySelector('ul')
var repos = []
var user = ''


const render = (reposDt) => reposDt.forEach((element, index) => {
    repos.push(element);
    renderRepo(element, index)
})
const renderMemory = () => repos.forEach((element, index) => renderRepo(element, index))
const string = e => e.toString()
const errorCode = e => string(e)[string(e).length - 3] + string(e)[string(e).length - 2] + string(e)[string(e).length - 1]



buttonRepo.addEventListener('click', e => {
    if (repoName.value == '') {
        list.innerHTML = ''
        renderMemory()
    } else {
        list.innerHTML = ''
        repos.forEach((element, index) => {
            if (element.name == repoName.value) {
                return renderRepo(repos[index], index)
            } else {}
        })
    }
})

document.querySelector('.search').style.opacity = '0'

repoName.onkeypress = e => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') return buttonRepo.click()
}
userName.onkeypress = e => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') return buttonUser.click()
}

buttonUser.addEventListener('click', e => {
    repos = []
    document.querySelector('.search').style.opacity = '0'
    renderLoading(true)
    axios.get(`https://api.github.com/users/${userName.value}/repos`).then(res => {
        user = userName.value
        document.querySelector('.search').style.opacity = '100'
        renderLoading(false)
        var data = res.data
        render(data)
        userName.value = ''
    }).catch(err => {
        if (errorCode(err) == 404) renderError('Usuário Não Encontrado', errorCode(err))
        else renderError(err, errorCode(err))
    })
})

function renderRepo(repo, i) {
    const repoText = {
        id: i,
        fullName: repo.full_name,
        name: repo.name,
        href: repo.html_url
    }
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener noreferrer')
    a.setAttribute('href', repoText.href)
    li.setAttribute('data-id', repoText.id)
    li.setAttribute('data-name', repoText.name)
    a.appendChild(document.createTextNode(repoText.fullName))
    li.appendChild(a)
    list.appendChild(li)
}

function renderLoading(state) {
    if (state) {
        list.innerHTML = ''
        const li = document.createElement('li')
        li.appendChild(document.createTextNode('Buscando Usuario...'))
        list.appendChild(li)
    } else list.innerHTML = ''
}

function renderError(e, code) {
    if (code == 404) {
        list.innerHTML = ''
        const li = document.createElement('li')
        li.appendChild(document.createTextNode('Usuário Não encontrado'))
        list.appendChild(li)
    } else {
        list.innerHTML = ''
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(e))
        list.appendChild(li)
    }
}