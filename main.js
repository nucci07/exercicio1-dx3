function coordenadas(){
    const texto = document.querySelector("h1");
    const X = document.querySelector('#valorx').value;
    const Y = document.querySelector('#valory').value;
   
    if((0 < X && X < 432) && (0 < Y && Y < 468)){
        texto.innerHTML = "A bola pingou dentro da quadra!";
    }else{
        texto.innerHTML = "A bola pingou fora da quadra, !";
    }

 }
