function exemploCreateElement(){
    //criar elemnto
    let novoParagrafo = document.createElement("p")

    novoParagrafo.textContent="Novo paragrafo criado com javascript"

//pegar o elmento onde vai ser inserido o elemento criado
let areal = document.getElementById("areal")

// adicionar na pagina 
areal.appendChild(novoParagrafo)
}

function creattitulo(){
let titulo = document.createElement("h3")

titulo.textContent = "Titulo criado pelo javascript"

let areal = document.getElementById("areal")

areal.appendChild(titulo)
}

//add nome na lista 
function item(){

let adicionar = prompt("Insira o nome da fruta")
let frutas = document.createElement("li") //
 frutas.textContent= adicionar

 let lista =  document.getElementById("lista")

 lista.appendChild(frutas) //

}

function alterarcorsite(){
    document.getElementById("app").classList.add("fundo-preto")

}

function criarclasse(){
    let novoElemento = document.createElement("div")

    novoElemento.textContent = "Essse elemento tem a classe destque"
    novoElemento.classList.add("destaque")

    document.getElementById("area3").appendChild(novoElemento)
}

function texto(){
    let tex = document.createElement("div")

    tex.textContent = "Elemento novo"
    tex.classList.add("texto")


    document.getElementById("area3").appendChild(tex)
}

function criarCard(){
    //criar a div
    let card = document.createElement("div")
//inserri o html completo na div
    card.innerHTML=`

    <h3> Card do usuario</h3>
    <p> Nome: João Silva </p>
    <p>idade: 25 anos </p>
    <button> Ver perfil</button>
    `
    document.getElementById("area4").appendChild(card)}

    function apagartudo(){
        document.getElementById("area4").innerHTML=""
}

function remove2(){
    // para emover um elemnto childe
    
    //precisa selecionar o elemento pai

    let divprincipal = document.getElementById("itensremover")

    let elementoremover = document.getElementById("item1")

    divprincipal.removeChild(elementoremover)
}

function remove3(){
    // para remover um elemnto childe
    
    //precisa selecionar o elemento pai

    let divprincipal = document.getElementById("itensremover")

    let elementoremover = document.getElementById("item2")

    divprincipal.removeChild(elementoremover)
}
