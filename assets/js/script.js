const botaoCriptografar = document.querySelector(".apresentacao__formulario__cripto")
const botaoDesCriptografar = document.querySelector(".apresentacao__formulario__decripto")
const botaoCopiar = document.querySelector(".apresentacao__resultado_copiar")
const input = document.getElementById("apresentacao__formulario__input")
const imagemResultado = document.getElementById("apresentacao__resultado__imagem")
let section = document.querySelector(".apresentacao__resultado__box")

function criptografar(){
  
    const texto = input.value
    let textoCriptografado = ""

    for(let letra of texto){
        if(letra.toLowerCase() === 'e'){
            textoCriptografado += "enter"
        }else if(letra.toLowerCase() === 'i'){
            textoCriptografado += "imes"
        }else if(letra.toLowerCase() === 'a'){
            textoCriptografado += "ai"
        }else if(letra.toLowerCase() === 'o'){
            textoCriptografado += "ober"
        }else if(letra.toLowerCase() === 'u'){
            textoCriptografado += "ufat"
        }else{
            textoCriptografado += letra
        }
    }
    
    
    section.style.display = "flex"
    section.style.justifyContent = 'space-around' 
    section.style.alignItems = 'space-around'
    section.children[0].style.display = 'none'
    const resultadoBoxTexto = section.children[1]
    resultadoBoxTexto.children[0].innerHTML = ""
    resultadoBoxTexto.children[1].innerHTML = textoCriptografado
    resultadoBoxTexto.children[1].style.fontSize = "24px"
    resultadoBoxTexto.children[2].style.display = "block"    
}


function descriptografar(){

    const texto = input.value
    const desencriptado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    
     section.style.display = "flex"
     section.style.justifyContent = 'space-around' 
     section.style.alignItems = 'space-around'
     section.children[0].style.display = 'none'
     const resultadoBoxTexto = section.children[1]
     resultadoBoxTexto.children[0].innerHTML = ""
     resultadoBoxTexto.children[1].innerHTML = desencriptado
     resultadoBoxTexto.children[1].style.fontSize = "24px"
     resultadoBoxTexto.children[2].style.display = "block"
}

function copiar(){
    const resultadoBoxTexto = section.children[1]
    input.value = resultadoBoxTexto.innerText
}

botaoCriptografar.addEventListener("click", criptografar)
botaoCopiar.addEventListener("click", copiar)

botaoDesCriptografar.addEventListener("click", descriptografar)