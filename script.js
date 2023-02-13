var numero = document.querySelector('#number')
var tabuada = document.querySelector('#tabuada')
var msg = document.querySelector('#msg')

function calcular() {
    
    if (numero.value < '0' || numero.value == '') {
        msg.innerHTML = 'Número inválido!'
        msg.style.color = 'red'
    
    } else {

        for (contador = 0; contador <= 10; contador++) {
            var resultado = numero.value * contador
            tabuada.innerHTML += `${numero.value} x ${contador} = ${resultado} </br>`
        }
    }
}

function focar() {
    numero.innerHTML = ''
    tabuada.innerHTML = ''
    msg.innerHTML = ''
}