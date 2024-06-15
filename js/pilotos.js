function trocaLaEmCima(numbero){
  let trocaCor;
  let trocaFoto;
  let trocaNome;
  let trocaInfo;
  let fala;

  switch (numbero) {
    case 0:
      trocaCor = 0;
      trocaFoto = "img/GeneralCob.png";
      trocaNome = "General da Força Cobalto";
      trocaInfo = "<b>Vida:</b> 20<br><b>Armadura:</b> 130<br><b>Velocidade:</b> 60<br>";
      fala = 'General Rogerio é o implacável líder da Força Cobalto, conhecido por sua mente militar meticulosa e sua capacidade de comandar com punho de ferro. Veterano endurecido por anos de batalhas e pelas pedras no rins, Rogerio acredita firmemente que a ordem só pode ser estabelecida através do controle absoluto. Sua presença dominante no campo de batalha e sua estratégia o tornaram um comandante temido e respeitado por seus adversários.';
    break;
    case 1:
    trocaCor = 0;
    trocaFoto = "img/navAzu.png";
    trocaNome = "Marinha da Força Cobalto";
    trocaInfo = "<b>Vida:</b> 180<br><b>Armadura:</b> 100<br><b>Velocidade:</b> 30<br>"
    fala = 'A Marinha da Força Cobalto, é uma força naval que combina habilidade tática com tecnologia de ponta para dominar os mares. Conhecida por sua capacidade de realizar operações anfíbias complexas e ataques navais coordenados, a Marinha desempenha um papel crucial em assegurar rotas marítimas e projetar poder sobre vastas áreas de água. Seu lema, "Liberdade pelas Ondas", reflete sua missão de manter a supremacia naval e garantir a segurança dos territórios aliados.';
    break
    case 2:
    trocaCor = 0;
    trocaFoto = "img/solAzu.png";
    trocaNome = "Exército da Força Cobalto";
    trocaInfo = "<b>Vida:</b> 110<br><b>Armadura:</b> 50<br><b>Velocidade:</b> 80<br>"
    fala = 'O Exército da Força Cobalto, é a espinha dorsal das operações terrestres, trazendo uma combinação de poder de fogo, mobilidade e inteligência de campo para os combates. Especializados em manobras táticas e defesa de território, os soldados do Exército são conhecidos por sua resistência e engenhosidade em batalhas prolongadas. Sua capacidade de adaptação e seu treinamento rigoroso os tornam uma força imbatível em terrenos variados, de cidades devastadas a campos abertos.';
    break
    case 3:
    trocaCor = 0;
    trocaFoto = "img/aeroAzu.png";
    trocaNome = "Aeronáutica da Força Cobalto";
    trocaInfo = "<b>Vida:</b> 140<br><b>Armadura:</b> 110<br><b>Velocidade:</b> 10<br>"
    fala = 'A Aeronáutica da Força Cobalto, domina os céus com precisão e eficácia. Equipados com as aeronaves mais avançadas, os pilotos dessa divisão realizam missões de reconhecimento, suporte aéreo e ataques cirúrgicos, garantindo a superioridade aérea em qualquer conflito. Sua habilidade em operar em condições adversas e executar manobras complexas é vital para o sucesso das operações da Força Cobalto em múltiplos fronts.';
    break
    case 4:
    trocaCor = 1;
    trocaFoto = "img/GeneralCar.png";
    trocaNome = "General da Esquadrão Carmesin";
    trocaInfo = "<b>Vida:</b> 100<br><b>Armadura:</b> 170<br><b>Velocidade:</b> 40<br>"
    fala = 'General <del>motoquira</del>...err, Flávia, a líder imbatível do Esquadrão Carmesim, é uma estrategista brilhante conhecida por seu espírito indomável e habilidades excepcionais em combate. Antiga professora de táticas militares, Flávia é movida por um desejo inabalável de restaurar a liberdade e a justiça(afinal ninguém chama ela de Motoqueira e sai impune). Ela está sempre acompanhada de seus pequenos escudeiros <b>Caramelo 01</b> e <b>Caramelo 02</b>, eles podem parecer inofensivos, mas são mais perigosos do que parecem';
    break
    case 5:
    trocaCor = 1;
    trocaFoto = "img/navVer.png";
    trocaNome = "Marinha do Esquadrão Carmesim";
    trocaInfo = "<b>Vida:</b> 50<br><b>Armadura:</b> 60<br><b>Velocidade:</b> 90<br>"
    fala = 'A Marinha do Esquadrão Carmesim, é uma força naval que utiliza estratégias agressivas e armamentos avançados para dominar os oceanos. Especializada em bloqueios navais, bombardeios costeiros e controle de rotas marítimas estratégicas, a Marinha é fundamental para impor a autoridade do Esquadrão Carmesim em águas internacionais. Seu lema, "Poder Através dos Mares", exemplifica sua missão de garantir a superioridade naval e sufocar qualquer resistência.';
    break
    case 6:
    trocaCor = 1;
    trocaFoto = "img/solVer.png";
    trocaNome = "Exército do Esquadrão Carmesim";
    trocaInfo = "<b>Vida:</b> 170<br><b>Armadura:</b> 180<br><b>Velocidade:</b> 30<br>"
    fala = 'O Exército do Esquadrão Carmesim, é uma força terrestre conhecida por sua força esmagadora e disciplina militar rigorosa. Especializado em assaltos diretos, ocupação de território e táticas de cerco, o Exército é uma máquina de guerra implacável que avança sem parar até que a vitória seja assegurada. Seus soldados, treinados para resistir a condições extremas e enfrentar os inimigos mais ferozes, encarnam a crença do Esquadrão Carmesim na conquista pela força.';
    break
    case 7:
    trocaCor = 1;
    trocaFoto = "img/aeroVer.png";
    trocaNome = "Aeronáutica do Esquadrão Carmesim";
    trocaInfo = "<b>Vida:</b> 90<br><b>Armadura:</b> 20<br><b>Velocidade:</b> 160<br>"
    fala = 'A Aeronáutica do Esquadrão Carmesim, opera com uma mistura de agilidade e poder devastador. Esta divisão aérea realiza missões de bombardeio, superioridade aérea e interdição com precisão mortal, usando aeronaves equipadas com a mais avançada tecnologia bélica. Conhecidos por seus ataques surpresa e sua capacidade de mudar o rumo das batalhas com ataques aéreos estratégicos, eles garantem que o Esquadrão Carmesim domine não apenas a terra, mas também os céus.';
    break
  }

  if(trocaCor == 0){
    document.getElementById('infocor').style.backgroundColor = '#79A8D5';
    document.getElementById('infocor').style.borderColor = '#4F52A4';
  }else{
    document.getElementById('infocor').style.backgroundColor = '#BB5049';
    document.getElementById('infocor').style.borderColor = '#A22238';
  }

  document.getElementById('fotinha').src = trocaFoto;
  document.getElementById('nome').innerHTML = trocaNome;
  document.getElementById('info').innerHTML = trocaInfo;
  document.getElementById('falaJulia').innerHTML = fala;
  document.getElementById('infocor').scrollIntoView();
}