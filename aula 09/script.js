// 1 pega o elemnto 
let titulo = document.getElementById("titulo")

//exibir a variavel no console
console.log (titulo)

//exibir o valor da variavel no console
console.log(titulo.textContent) //Retorna o texto que esta na tag

let descricao = document.getElementById("descricao")
console.log(descricao.textContent)


titulo.textContent="Titulo alterado pelo javascript"
descricao.textContent="Descrição alterada pelo javascript"

descricao.textContent = prompt("Digite a descrição")