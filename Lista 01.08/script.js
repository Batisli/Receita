let livros=["O pequeno principe", "Dom casmurro", "1984", "o hobbit", "O alquimista", "Cem anos de solidão" ]

let livro = prompt ("Quais três livros você gostaria ? ")
let livro1 = prompt("Qual o segundo livro?")
let livro2= prompt ("Qual o terceiro livro?")

console.log (livros)

livros.sort()// sort ordem alfabetica 

for(let i =0; i <livros.length; i++){
    console.log (i+1, livros[i])
}

let posicoes =livros.lastIndexOf(livro)

if(livros.includes (livro)){
alert("livro encontardo")
livros.push (livro)
}





    //alert("O livro foi encontrado " + livros.indexOf(livro))
//else{alert("❌Não tem esse livro")}







    

