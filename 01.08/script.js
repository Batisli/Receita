let frutas = ["Maça", "Laranja", "Uva", "Morango", "Laranja"]

// Quando um elemento não é encontrado a função retorna -1
let posicao = frutas.indexOf("Uva") 
console.log("A uva esta na posição", posicao)

// Em casos de elementos iguais ele retorna a primeira ocorrência
let posicaoLaranja = frutas.indexOf("Laranja")
// Retorna a ultima ocorrência
let ultimaPosicaoLaranja = frutas.lastIndexOf("Laranja") 
console.log("A Laranja esta na posição", posicaoLaranja) 

let ingredientes = ["farinha", "ovos", "açúcar", "leite"]

console.log("Tem chocolate?", ingredientes.includes("chocolate"))

if(ingredientes.includes("leite")){
    console.log("✅ Tem leite na receita!")
} else {
    console.log("❌ Não tem leite na receita!")
}

//------------

let filmes =["Matrix", "Vingadores", "Titanic", "A origem", "Cidade de Deus"]

let filme = prompt ("Qual filme gostaria de alugar ? ") 

let posicoes =filmes.lastIndexOf(filme)

if(filmes.includes (filme))
    alert("O filme foi encontrado na posição " + filmes.indexOf(filme))
else{alert("❌Não tem esse filme")}

//-----------------
// lista vazia

let pessoas = []
console.log(pessoas)

pessoas.push('Julia')
pessoas.push('Anan')
pessoas.push('Kaio','Luiz', 'Marcos', 'Gabriel')

pessoas.sort()//ordena alfabeticamente 
console.log ("Depos", pessoas )

