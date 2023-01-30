import validator from './validator.js';

let cardNumber = document.getElementById("card-number")
let button = document.getElementById("btn")
let message = document.getElementById ("message")


button.addEventListener('click', number)

function number(evento) {
    evento.preventDefault()
    let numeroCartao = cardNumber.value 
    let validador = validator.isValid(numeroCartao)

    if (numeroCartao.length < 16) {
        return(message.innerHTML = "Número de Cartão Incompleto")
    }
    else if (validador === true) {
        return(message.innerHTML = "Cartão Válido")
    }
    else if (!validador) {
        return(message.innerHTML = "Cartão Inválido")
    }
    
}







    




