// 
function click()
{    
    let contador = parseInt(document.querySelector("#hdnLikes").value);
    contador = contador + 1;    
    document.querySelector("#hdnLikes").value = contador;
    document.querySelector("#spanLikes").innerHTML = contador + " like(s)";
   
}


const elemento = document.querySelector("#btnLike");
elemento.addEventListener("click", click);

