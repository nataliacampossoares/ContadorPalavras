const inputTexto = document.querySelector("[input-texto]") //caixa
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let isContagemCaracteres = true

function handleInputTexto(evento){
    console.log("entrou")
    if (isContagemCaracteres){
        let contadorString = evento.target.value.length;
        divContador.innerText = contadorString + " caracteres";}
    else {
        let contadorPalavra = evento.target.value.trim().split(" ").length
        divContador.innerText = contadorPalavra + " palavras"
    }
    contarAtualizar()
}

function handleBtnContar(evento){
    if (isContagemCaracteres){
        evento.target.innerText = "Contar Palavras"
    }
    else{
        evento.target.innerText = "Contar Caracteres"
    }
    
    isContagemCaracteres = !isContagemCaracteres
    
    inputTexto.dispatchEvent(new Event("input")) //ele "entra" na funcao handleInputTexto
    contarAtualizar()

}

function contarAtualizar() {

}


btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)
