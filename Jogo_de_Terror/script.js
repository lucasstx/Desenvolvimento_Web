let texto = document.getElementById("texto");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
texto.innerHTML = "Bem vindo(a) ao jogo de terror feito por Lorena Leite<br><br>Escolhas feitas influenciarão se você vai viver ou morrer...<br>Para encarar, clique na tecla enter.<br>Para fugir, clique na tecla Backspace.<br><br>E ai, vai encarar?";
document.getElementById("body").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      first();
    }
});
document.getElementById("body").addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
      document.write("Você não quis jogar o jogo :(");
    }
});
function reiniciar() {
    location.reload();
}
function first(){
    texto.innerHTML = "Amanhã é feriado, e isso significa que você não terá nenhum tipo de compromisso.<br>Ao olhar seu telefone, vê que recebeu um convite de sua família para passarem o dia em um sítio, você vai?";
    botao1.innerHTML = "<button onclick='esc1()'>Não, prefiro ficar sozinha</button>";
    botao2.innerHTML = "<button onclick='esc2()'>Sim, há um bom tempo que não os vejo.</button>";
    document.getElementById("msc").play();
}
function esc1(){
    texto.innerHTML = "Você decide ficar em casa assistindo série e curtindo sua própria companhia.";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function esc2(){
    texto.innerHTML = "Ao decidir ir, você logo vai arrumar seus pertences. Ao terminar, entra nas redes sociais e é surpreendida por um popup misterioso.<br>Ele diz que você não deve sair de casa, pois se arrependerá mais tarde.<br>O que você faz?";
    botao1.innerHTML = "<button onclick='esc2_1()'>lembro do popup e desisto da viagem</button>";
    botao2.innerHTML = "<button onclick='esc2_2()'>'por que eu acreditaria em um popup?'você pensa. ignora-o e decide dormir.</button>";
}
function esc2_1(){
    texto.innerHTML = "Por ficar completamente assustado com a coincidência, decide não ir e desmarca com a família.";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function esc2_2(){
    texto.innerHTML = "Você acorda bem cedo, arruma suas coisas e vai ao posto de gasolina. Enquanto abastece o carro, checa o celular e recebe uma mensagem anônima.o que fazes?";
    botao1.innerHTML = "<button onclick='esc2_2a()'>verifico-a</button>";
    botao2.innerHTML = "<button onclick='esc2_2b()'>ignoro-a</button>";
}
function esc2_2a(){
    texto.innerHTML = "a mensagem diz 'ainda dá tempo de desistir'. ao ler, voce lembraimediatamente do popup e desiste da viagem";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function esc2_2b(){
    texto.innerHTML = "Deve ser alguma conta fake, você pensa. Paga o frentista e vai para a casa de sua mãe, pois esse é o ponto de encontro para irem juntos ao sítio.<br><br>Ao chegar, encontra a casa completamente vazia e acha tudo muito estranho, será que eles partiram sem você?";
    botao1.innerHTML = "<button onclick='esc2_2b_1()'>Decido mandar uma mensagem diretamente para a minha mãe, o que aconteceu?</button>";
    botao2.innerHTML = "<button onclick='esc2_2b_2()'>ignoro-a</button>";
}
function esc2_2b_1(){
    texto.innerHTML = "decido mandar uma mensagem diretamente para a minha mãe, o que aconteceu?<br><br>ela não recebe a mensagem. De fato, já devem estar na estrada.<br><br>você pega a estrada e sente uma má impressão, parece ter esquecido de algo, mas segue mesmo assim. <br>Ao chegar em determinada parte da estrada, vê uma pessoa. espera, ela parece estar completamente assustada, e suja de sangue.<br>O que você faz?";
    botao1.innerHTML = "<button onclick='dec9()'>Eu paro o carro, mas não desço dele.</button>";
    botao2.innerHTML = "<button onclick='dec10()'>Eu sigo em frente, vai que é um assassino.</button>";
}
function esc2_2b_2(){
    texto.innerHTML = "Abro o google maps e checo o meu destino. Devem ter ido na frente, afinal.<br>Você pega a estrada e sente uma má impressão, parece ter esquecido de algo, mas segue mesmo assim. <br>Ao chegar em determinada parte da estrada, vê uma pessoa. espera, ela parece estar completamente assustada, e suja de sangue.<br>O que você faz?";
    botao1.innerHTML = "<button onclick='dec9()'>Eu paro o carro, mas não desço dele.</button>";
    botao2.innerHTML = "<button onclick='dec10()'>Eu sigo em frente, vai que é um assassino.</button>";
}
function dec9(){
    texto.innerHTML = "eu paro o carro, mas não desço dele. <br>Pergunto o que houve e sinto que essa pessoa se aproxima. Ela parece estar ferida, provavelmente não me machucará.<br>Você percebe que tudo era uma encenação, ela aponta uma faca pra você e faz diversas ameaças caso você não desça do carro";
    botao1.innerHTML = "<button onclick='dec9_1()'>sim, ele pode me matar</button>";
    botao2.innerHTML = "<button onclick='dec9_2()'>Não, como vou retornar pra casa?</button>";
}
function dec9_1(){
    texto.innerHTML = "Depois de 10 segundos, você percebe que acabou de ser assaltado. Nunca confie em estranhos";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function dec9_2(){
    texto.innerHTML = "você acorda em um hospital, totalmente confuso e desnorteado.<br>Você lutou corporalmente com aquele cara e bateu a cabeça no chão. Por sorte, um motorista o viu e o levou até o hospital";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    ddocument.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function dec10(){
    texto.innerHTML = "eu sigo em frente, vai que é um assassino. <br>depois de 2h na estrada, você recebe uma mensagem, mas como? estás sem sinal... percebe que é sua mãe, avisando que acabaram de chegar ao sítio.<br>como você se sente? ";
    botao1.innerHTML = "<button onclick='dec10c()'>com muito medo, eu estou sem sinal…</button>";
    botao2.innerHTML = "<button onclick='dec10c()'>aliviado, eles já estão lá.</button>";
}
function dec10c(){
    texto.innerHTML = "segue viagem e checa o google maps, e acaba de perceber que restam 5 minutos para chegar ao local! 'finalmente, poderei contar o que aconteceu no caminho!', você pensa.<br><br>Ao chegar na entrada do ramal, você lê 'não entre' em uma placa. O que fazes?";
    botao1.innerHTML = "<button onclick='dec13()'>Não entro</button>";
    botao2.innerHTML = "<button onclick='dec14()'>Entro mesmo assim, foi o local que me enviaram!</button>";
}
function dec13(){
    texto.innerHTML = "Você se sente mal e volta para casa.";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function dec14(){
    texto.innerHTML = "você entra e acha tudo muito estranho, o ramal é estreito demais. Além disso, é curto, pois você logo localiza uma casa, mas não avista nenhum carro...<br>decide seguir e estaciona o carro bem na frente da chácara. O silêncio está quase ensurdecedor, você começa a engolir a seco e sente que suas mãos começam a tremer.<br>você está parado bem na frente da porta, o que fazes? ";
    botao1.innerHTML = "<button onclick='dec15()'>Abro-a</button>";
    botao2.innerHTML = "<button onclick='dec16()'>Não a abro</button>";
}
function dec15(){
    texto.innerHTML = "Você está completamente sozinho, ou pelo menos, acha que está. <br>A casa fede a mofo, os móveis estão empoeirados, algumas portas estão semi-abertas e... aquilo é sangue? <br>você sai em disparada para o carro. liga-o e acelera o máximo que pode. o que está acontecendo? ";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function dec16(){
    texto.innerHTML = "É melhor ir embora daqui, provavelmente estou em um lugar que não deveria estar. <br>Ao chegar na cidade, você decide ir para onde? ";
    botao1.innerHTML = "<button onclick='dec17()'>decido ir para a minha casa.</button>";
    botao2.innerHTML = "<button onclick='dec18()'>vou para a casa de minha mãe, ela disse que tinha chegado...</button>";
}
function dec17(){
    texto.innerHTML = "você chega em casa perplexo, toma um banho e tenta relaxar.<br>você deveria ter ficado em casa. ";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function dec18(){
    texto.innerHTML = "verifico o celular e vejo que são 12h. Seu carro está na garagem, sinônimo de que ela está em casa.<br>Bato à porta e ao abrir, minha mãe se assusta com o meu semblante.<br>ao explicar tudo que aconteceu, sua mãe empalidece. isso só piora e situação. o que vc faz? ";
    botao1.innerHTML = "<button onclick='dec17()'>tenta socorre-la.</button>";
    botao2.innerHTML = "<button onclick='dec18()'>chama alguém. </button>";
}
function dec19(){
    texto.innerHTML = "você a deita no sofá e pega um copo de água na geladeira, então percebe que ela está voltando ao normal e decide perguntar o que houve.<br>mas ela responde que ninguém marcou de viajar no feriado e que, aquele endereço nunca pertenceu a família...<br><br>O que está acontecendo? ";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}
function dec20(){
    texto.innerHTML = "seu pai vem correndo e lida impacientemente com a situação. Ao contar a história, ele lhe olha e pergunta se você está louco por brincar com eles dessa forma, afinal, nunca houve viagem nenhuma, e nada nesse endereço pertenceu à família algum dia.<br><br>O que está acontecendo? ";
    botao1.innerHTML = "";
    botao2.innerHTML = "";
    document.getElementById("reini").innerHTML = "<button onclick='reiniciar()'>Deseja reiniciar?</button>";
}