let listadecompras = ["Pão", "Leite", "Açúcar", "Café"]

let amigos = ["Joanna", "Emily", "Raquel", "Julia", "Thayna"]

let notas = [8.7, 9.5, 10, 9.1, 6.2]

console.log("Amigos: ", amigos )
console.log("Meul melhor amigo é ", amigos [2])
console.log("Eu gosto muito da ", amigos[3])
console.log("faz tempo que ue não vejo: ", amigos[10])

let Cidadesjavisitadas = ["Rio de janeiro ", "Minas Gerais ", "Santa Catarina", "Ilha bela"]

console.log("todos que ja fui: ", Cidadesjavisitadas)
console.log("primeira cidade: ", Cidadesjavisitadas [0])
console.log("ultima cidae que visitei: ", Cidadesjavisitadas [3])

let animais = ["😻", "🐶", "🐭", "🐹", "🐷", "🦊", "🐯"]

console.log("Animal:", animais [2])
console.log("Animal:", animais [5])
console.log("Animal:", animais[6])

//-------
let carros = ["Civic", "Uno", "Gol", "Corolla" ]
console.log("Antes",  carros)

carros[1] = "HB20"// Troca unopor hb20

console.log("Depis", carros)

//Push - adiciona um elemento no final da lista

carros.push("Celta")
carros.push("Renegade", "Passat")

console.log(carros)

//-------
carros.pop()//remove o ultimo elemento
carros.shift()//remova o primeiro elemento
carros.unshift("Urus", "Mobi")// adiciona elementos na frente 

console.log("Carros após atualizações: ", carros)

//-----------
let playlist = ["Evidencias ", "Funk do pão de queijo ", "Oh mãe compra bob goods", "Bohemian Rhapsody ", "Trem bala", "Aquarela"]

console.log("Playlist: ", playlist)



playlist.shift()
playlist.shift()
playlist.shift()
playlist.unshift("Evidencias ")

playlist.pop()
playlist.pop()

playlist[1] = "Evidencias"
playlist[0] = "Bohemi Rhapsody"

playlist.unshift("I´m good","Summer")


playlist.push("We love rock 'n' roll ", "Iron man ", "Sweet child")


