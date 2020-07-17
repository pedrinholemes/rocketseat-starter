const container = document.querySelector('#squares')
const stroboButton = document.querySelector('#strobo')
var stroboState = false
var colorSquare = '#f00'
setInterval(() => document.querySelectorAll('#squares div.random').forEach(element => element.style.backgroundColor = getRandomColor()), 100);

stroboButton.addEventListener('click', ({ target }) => {
    document.querySelectorAll('#squares div').forEach(element => {
        console.log(element.classList[0])
        if (element.classList[0] == 'random') {
            element.classList = ''
        } else {
            element.classList = 'random'
        }
    })
})

function square() {
    var square = document.createElement('div')
    square.style.width = '100px'
    square.style.height = '100px'
    square.style.backgroundColor = colorSquare
    square.addEventListener('mouseover', mouseOverBackground)
    square.addEventListener('click', e => e.target.classList.toggle('random'))
    container.append(square)
}

function mouseOverBackground(e) {
    const element = e.target
    element.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setAllRandomColor() {
    var color = getRandomColor()
    colorSquare = color
    document.querySelectorAll('#squares div').forEach(element => {
        element.style.backgroundColor = color
    });
}


function setRandomColor() {
    colorSquare = getRandomColor()
    document.querySelectorAll('#squares div').forEach(element => {
        element.style.backgroundColor = getRandomColor()
    });
}

function corPersonalizada() {
    var promptColor = prompt('Cor personalizada')
    var color = '#'
    if (promptColor.length == 3) {
        for (var i = 0; i < 3; i++) {
            color += promptColor[i];
        }
        colorSquare = color
        document.querySelectorAll('#squares div').forEach(element => {
            element.style.backgroundColor = color
        });
    } else if (promptColor.length == 6) {
        for (var i = 0; i < 6; i++) {
            color += promptColor[i];
        }
        colorSquare = color
        document.querySelectorAll('#squares div').forEach(element => {
            element.style.backgroundColor = color
        });
    } else if (promptColor.length == 8) {
        for (var i = 0; i < 8; i++) {
            color += promptColor[i];
        }
        colorSquare = color
        document.querySelectorAll('#squares div').forEach(element => {
            element.style.backgroundColor = color
        });
    } else {
        alert('A cor deve seguir o esquema Hexadecimal, ou seja, pode conter as letras ABCDEF e os numeros 1234567890, deve ter 3, 6 ou 8 algarismos')
    }
}

function reset() {
    document.querySelectorAll('#squares div').forEach(element => {
        element.classList = ''
        element.style.backgroundColor = colorSquare
    })
}

function squares(how) {
    if (how <= 50) {
        for (let i = 0; i < how; i++) {
            square()
        }
    } else {
        alert('Você pode fazer mais que 50 quadrados, mas não todos de uma vez')
    }
}
// /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i