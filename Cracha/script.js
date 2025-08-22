

function criarcard() {
    let nome = prompt("Digite um Nome")
    let cargo = prompt("Digite cargo ")
    let urlfoto = prompt("Digite link da foto")

    const nivel = prompt("Qual o nível do usuario? (j,p,s)").toLowerCase();

    


            let novocracha = document.createElement("div")

            novocracha.innerHTML = ` 
 <div class="card">

           <img class="${nivel}" src="${urlfoto}" alt="">

            
            <h2 id="Nome"> ${nome}</h2>
            <p id="função">${cargo}</p>
            <p id="empresa">SENAI LTDA</p>

        </div>
`

            document.getElementById("crachas").appendChild(novocracha)
    }

    function remover() {

        document.getElementById("crachas").innerHTML = ""
    }

