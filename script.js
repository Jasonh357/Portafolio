const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje")

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptado){
    let encriptado = [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
     stringEncriptado = stringEncriptado.toLowerCase();

    for(i = 0; i < encriptado.length; i++){
        if(stringEncriptado.includes(encriptado[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(encriptado[i][0], encriptado[i][1])
        }
    }
    return stringEncriptado
}



function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let encriptado = [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(i = 0; i <encriptado.length; i++){
        if(stringDesencriptado.includes(encriptado[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(encriptado[i][1] , encriptado[i][0])
        }
    }
    return stringDesencriptado
}

function copiarAlPortapapeles() {
    let texto = document.querySelector(".mensaje");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');

}