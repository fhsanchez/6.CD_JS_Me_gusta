// 
function click1()
{    
    let contador = parseInt(document.querySelector("#hdnLikes1").value);
    contador = contador + 1;    
    document.querySelector("#hdnLikes1").value = contador;
    document.querySelector("#spanLikes1").innerHTML = contador + " like(s)";
   
}

function click2()
{    
    let contador = parseInt(document.querySelector("#hdnLikes2").value);
    contador = contador + 1;    
    document.querySelector("#hdnLikes2").value = contador;
    document.querySelector("#spanLikes2").innerHTML = contador + " like(s)";
   
}

function click3()
{    
    let contador = parseInt(document.querySelector("#hdnLikes3").value);
    contador = contador + 1;
    document.querySelector("#hdnLikes3").value = contador;
    document.querySelector("#spanLikes3").innerHTML = contador + " like(s)";
   
}

const elemento1 = document.querySelector("#btnLike1");
elemento1.addEventListener("click", click1);

const elemento2 = document.querySelector("#btnLike2");
elemento2.addEventListener("click", click2);

const elemento3 = document.querySelector("#btnLike3");
elemento3.addEventListener("click", click3);

