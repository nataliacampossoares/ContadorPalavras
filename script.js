const inputTexto = document.querySelector("[input-texto]") //caixa
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let isContagemCaracteres = true

function handleInputTexto(evento){
    //let contadorString = evento.target.value.length;
    //divContador.innerText = contadorString + " caracteres";
    let contadorPalavras = evento.target.value.split(" ")
    let contar = contadorPalavras.lenght;
    divContador.innerText = contar + " caracteres";
}

function handleBtnContar(evento){
    if (isContagemCaracteres){
        evento.target.innerText = "Contar Palavras"
        // isContagemCaracteres = false
    }
    else{
        evento.target.innerText = "Contar Caracteres"
        // isContagemCaracteres = true
    }

    isContagemCaracteres = !isContagemCaracteres
}

btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)
