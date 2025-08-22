//função para alterar email
//primeiro usar a palavra 'function' depois o nome dela
function mudartexto(){
document.getElementById("texto1").textContent = "O texto mudou🎊"
}
//chamar função
//mudartexto()

function mudarcor(){
    document.getElementById("texto2").style.color="red"
}
//display none = esconder elemento
function esconder(){
  document.getElementById("texto3") .style.display ="none" 
}

function mostrar(){
  document.getElementById("texto3") .style.display = "block" 
}
let contador = 0

function aumentarvalor(){
    contador= contador +1
    document.getElementById("texto4").textContent = contador

}

function diminuirvalor(){
    if(contador>=1) //se contador for menor que menor ou igual a 1 fica 0
    contador = contador -1
    document.getElementById("texto4").textContent = contador

}

function zerarvalor(){
    contador = 0
    document.getElementById("texto4").textContent = contador
}