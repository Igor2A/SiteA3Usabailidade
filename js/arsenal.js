
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

function copiaDoTrocaLaEmCima(numbero){
    let trocaFoto;
    let trocaNome;
    let trocaInfo;
    let fala;
  
    switch (numbero) {
      case 0:
        trocaFoto = "img/adr.gif";
        trocaNome = "Soro";
        trocaInfo = "+100% - <b>Ataque</b> por 15seg.<br>+100% - <b>Vida</b><br>15seg. - <b>Invencibilidade</b>";
        fala = "Com esta poderosa seringa, obtenha super força e torne-se invencível por 15 segundos e transformando-o em uma força imparável no campo de batalha";
      break;
      case 1:
        trocaFoto = "img/armor1.gif";
        trocaNome = "Colete";
        trocaInfo = "+50% - <b>Armadura</b>";
        fala = "Aumente seu escudo com este colete. Uma escolha equilibrada para jogadores que querem uma proteção extra";
      break;
      case 2:
        trocaFoto = "img/armor2.gif";
        trocaNome = "Armadura";
        trocaInfo = "+75% - <b>Armadura</b>";
        fala = " Para aqueles que entram na batalha prontos para enfrentar o pior, a armadura oferece o nível mais alto de proteção, aumentando significativamente o escudo do jogador.";
      break;
      case 3:
        trocaFoto = "img/bullet1.gif";
        trocaNome = "Balas";
        trocaInfo = "+10% - <b>Munição</b>";
        fala = "Nunca confunda isso com doces, isso serve para que você não fique sem tiros, é uma reserva simples de balas para sua arma. Ideal para confrontos rápidos!";
      break;
      case 4:
        trocaFoto = "img/bullet2.gif";
        trocaNome = "Pente de Balas";
        trocaInfo = "+25% - <b>Munição</b>";
        fala = 'Garanta que você tenha munição de sobra com cartuchos adicionais. Mais balas significam mais oportunidades para dominar o campo de batalha e ... não, isso não serve para pentear o cabelo...';
      break;
      case 5:
        trocaFoto = "img/bullet34.gif";
        trocaNome = "Bolsa de Balas";
        trocaInfo = "+50% - <b>Munição</b>";
        fala = 'Uma bolsinha cheia de balas significa que você nunca terá que recuar por falta de munição, por isso caro soldado não tenha vergonha de carrega-lá só por ser uma "bolsinha"';
      break;
      case 6:
        trocaFoto = "img/capa.gif";
        trocaNome = "Capacete";
        trocaInfo = "+25% - <b>Armadura</b>";
        fala = 'Cada jogador sabe que um bom capacete pode fazer a diferença entre a vitória e a derrota. Este capacete oferece um aumento modesto no escudo.';
      break;
      case 7:
        trocaFoto = "img/pernil.gif";
        trocaNome = "Pernil";
        trocaInfo = "+75% - <b>Vida</b>"
        fala = 'Quando a saúde está baixa, o Pernil de Dinossauro é a cura que você precisa. Restaure uma grande quantidade de vida e volte à luta';
      break;
      case 8:
        trocaFoto = "img/pimentao.gif";
        trocaNome = "Pimentão";
        trocaInfo = "+50% - <b>Velocidade</b>"
        fala = 'Dê um impulso na sua velocidade com uma pitada de pimenta.(não, isso não é um "Pimentão") Corra mais rápido para alcançar objetivos ou escapar de situações perigosas<br><br>Garanto que você irá correr mais rápido que o chinelo da sua mãe, das balas eu já não sei';
      break;
      case 9:
        trocaFoto = "img/racao.gif";
        trocaNome = "Ração Militar";
        trocaInfo = "+10% - <b>Vida</b>";
        fala = 'Uma cura rápida e leve. O soldados reclamam do gosto, mas os cachorros da General Flávia adoram...<br><br>Err..espera um pouco eu preciso ver o que aconteceu com a encomenda da comida pros cachorros...';
      break;
      case 10:
        trocaFoto = "img/remedy.gif";
        trocaNome = "Pílula";
        trocaInfo = "+25% - <b>Vida</b>";
        fala = 'Quando você precisa de mais do que uma cura leve, mas menos do que uma completa, o "<i>Paracefikabon</i>" lhe oferece uma recuperação média para manter você na luta.<br><b>atenção:</b>efeitos colaterais podem conter, tontura, diarreia, vômito, insônia, coceira e outros 42 sintomas piores que esses.';
      break;
      case 11:
        trocaFoto = "img/superbullets.gif";
        trocaNome = "SUPER Balas";
        trocaInfo = "+100% - <b>Ataque</b> por 15seg.";
        fala = 'A munição que todo jogador deseja. Com poder de parada superior, a <b>Super Bala</b> é a escolha certa para eliminar oponentes com eficiência';
      break;
    }
  
    document.getElementById('fotinha').src = trocaFoto;
    document.getElementById('nome').innerHTML = trocaNome;
    document.getElementById('info').innerHTML = trocaInfo;
    document.getElementById('falaJulia').innerHTML = fala;
    document.getElementById('infocor').scrollIntoView();
}