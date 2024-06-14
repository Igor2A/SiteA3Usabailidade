
function gavetaEsconder(gaveta,seta){

    if(document.getElementById(gaveta).style.display === "none"){

        document.getElementById(gaveta).style.display = 'flex';

        const collection = document.getElementsByClassName(seta);
        collection[0].innerHTML = "&#11165;";
        collection[1].innerHTML= "&#11165;";

    }else{

        document.getElementById(gaveta).style.display = 'none'
        const collection = document.getElementsByClassName(seta);
        collection[0].innerHTML = "&#11167;";
        collection[1].innerHTML= "&#11167;";

    }

    
}