function mostrarnome() {
    //pegar o input
    //o value retorna o valor que está dentro do input
    let nome = document.getElementById("inputnome").value
    //alterar o valor da div pelo valor do input

    document.getElementById("resultados1").innerHTML = '<p>Nome:' + nome + '</p>'
}

function mostraridade() {
    let idade = document.getElementById("inputidade").value

    if (idade == "") {
        document.getElementById("resultados1").innerHTML = '<p style= "color: red">Por favor informe a Idade </p>'
    }

    else {
        document.getElementById("resultados1").innerHTML = '<p>Idade:' + idade + '</p>'

    }
}

function mostrardata(){
let email = document.getElementById("inputdata").value

document.getElementById("resultados1").innerHTML = '<p>email:' + email +'<p>'

}

function mostrardata() {
    let idade = document.getElementById("inputidade").value

    if (idade == "") {
        document.getElementById("resultados1").innerHTML = '<p style= "color: red">Por favor informe a Idade </p>'
    }

    else {
        document.getElementById("resultados1").innerHTML = '<p>Data Nacimento:' + data + '</p>'

    }
}

function mostrarcor(){
    let cor = document.getElementById("inputcor").value
    let resultado = document.getElementById("resultados1")
    resultado.innerHTML=`<p> Cor selecionada: ${cor} </p>`
    resultado.style.backgroundColor=cor
}

function verificarcheckbox(){
let checkbox = document.getElementById("inputcheckbox")

if(checkbox.checked)
     document.getElementById("resultados1").innerHTML = '<p>Foi aceito os termos: </p>'
else{
    document.getElementById("resultados1").innerHTML = '<p>Não foi aceito os termos: </p>'
}
}

function pegargenero(){
    //retorna lista de tags que te um name 
    let opcoes = document.getElementsByName("genero")

    //variavel para guardar o valor que o usuario selecionou
    let selecionado= ""

//Criamos um for para descobrir entre todos os inputs qual esta selecionado
    for(let i = 0; i< opcoes.length; i++){
      if(opcoes[i].checked){
        selecionado = opcoes[i].value
      }
    }
}

    document.getElementById("resultados1").innerHTML = '<p>O valor selecionado foi' + selecionado +: '</p>'
