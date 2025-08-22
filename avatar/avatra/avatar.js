/*1 aletrar cor de fundo emoji apos apertar o botão*/
function alterarrosa(){
   document.getElementById("avatar").style.backgroundColor="#e91e63"
       
}
function alterarazul(){
    document.getElementById("avatar").style.backgroundColor="#2196f3"
}
function alterarverde(){
    document.getElementById("avatar").style.backgroundColor="#4caf50"
}
function alterarroxo(){
    document.getElementById("avatar").style.background="#9c27b0"
}
function alterarlaranja(){
    document.getElementById("avatar").style.backgroundColor="#ff9800"
}

/*2*/
function feliz(){
   document.getElementById("avatar").textContent="😁"
       
}
function triste(){
    document.getElementById("avatar").textContent="☹️"
}
function bravo(){
    document.getElementById("avatar").textContent="😡"
}
function surpreso(){
    document.getElementById("avatar").textContent="🫢"
}
function apaixonado(){
    document.getElementById("avatar").textContent="🥰"
}

/*3*/
function nome(){
    document.getElementById("visitante").textContent= prompt("Qual seu nome")
}

function bio(){
    document.getElementById("bio").textContent= prompt("Descrição")
}
/*4*/
function online(){
    document.getElementById("status").textContent="🟢online"
}

function ocupado(){
    document.getElementById("status").textContent= "🟡Ocupado"
}

function ausente(){
    document.getElementById("status").textContent="🔴Ausente"
}


function invisivel(){
  document.getElementById("avatar") .style.display ="none" 
}

function visivel(){
  document.getElementById("avatar") .style.display ="flex" 
}
function recarrgar(){
    document.getElementById("avatar").style.backgroundColor = "yellow";

    document.getElementById("avatar").textContent= "😁";

    document.getElementById("avatar").style.fontSize ="60px";
}


   

