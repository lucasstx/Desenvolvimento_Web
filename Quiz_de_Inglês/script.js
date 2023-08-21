var c = 0, e = 0, per = 0, controla = 0, pro = 1; 
/*
c : variável de acertos da pessoas
e : variável de erros da pessoa
per : varável que vai controlar as perguntas, se o usuário estiver na pergunta 2, o valor da variável será 2, e assim sucessivamente
controla : Ela vai controla as respostas. Ela que vai impedir do usuário clicar em duas ou mais alternativas
pro : Ela vai faer o controle do botão de "proxima questão". A pessoa só vai poder avançar se ela tiver respondido a questão
*/
var bts = ["bta", "btb", "btc", "btd"]; /* Uma array que vai guardar os id's dos botões */
var titu = document.getElementById("titu");
var enu = document.getElementById("enunciado");
var ta = document.getElementById("ta");
var tb = document.getElementById("tb");
var tc = document.getElementById("tc");
var td = document.getElementById("td");
var certas = document.getElementById("corretas");
var erradas = document.getElementById("incorretas");
var funcao = "";
var imagem = document.getElementById("imagem_audio");

enu.innerHTML = "1. tick the alternative that fills the space correctly: ___ a furniture store near here?"; /* Vai alterar a tag <p> cujo o id seja "enunciado" e vai colocar */
ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) there're</button>"; 
tb.innerHTML = "<button value='certo' id='btb' onclick='check(this.value)'>B) there's</button>";
tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) there isn't</button>";
td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) there aren't</button>";



function check(valor) {
    if (per == controla) {
        if (valor == "certo") {
            c++;
        }
        else {
            e++;
        }
        per++;
        pro++;
    }
    else {
        window.alert("Você já respondeu essa pergunta");
    }
    for (var i = 0; i < 4; i++) {
        if (document.getElementById(bts[i]).value == "certo") {
            document.getElementById(bts[i]).style.backgroundColor = "green";
        }
        else {
            document.getElementById(bts[i]).style.backgroundColor = "red";
        }
    }
    certas.innerHTML = "Certas: " + c;
    erradas.innerHTML = "Erradas: " + e;
    funcao = "q" + (per + 1) + "()";
    document.getElementById("control").innerHTML = "<button onclick='" + funcao + "'>Próxima questão</button>";
}

function q2() {
    pro++;
    controla++;
    enu.innerHTML = "2. look at the map and tick the alternative that fills the space correctly: __ bank around here?";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) are there</button>";
    tb.innerHTML = "<button value='certo' id='btb' onclick='check(this.value)'>B) is there a</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) aren't there a</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) there's a</button>";
    document.getElementById("control").innerHTML = "";

}
function q3() {
    pro++;
    controla++;
    imagem.innerHTML = "<img src='q3.jpeg'>";
    enu.innerHTML = "3. look at the map and tick the alternative that fills the space correctly: yeah, there's __ right __ main street. it's __ the deli.";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) on - one - next to</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) next to - one - on</button>";
    tc.innerHTML = "<button value='certo' id='btc' onclick='check(this.value)'>C) one - one - next to</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) on - next to - one</button>";
    document.getElementById("control").innerHTML = "";
}
function q4() {
    pro++;
    controla++;
    enu.innerHTML = "4. look at the map and tick the alternative that fills the space correctly: are there public restrooms near there?:";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) yes, there'are</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) no, there's</button>";
    tc.innerHTML = "<button value='certo' id='btc' onclick='check(this.value)'>C) no, there aren't</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) yes, there aren't</button>";
    document.getElementById("control").innerHTML = "";
}
function q5() {
    pro++;
    controla++;
    enu.innerHTML = "5. look at the map and tick the alternative that fills the space correctly: are there shoes stores near here?";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) there's one</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) there's not one</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) there aren't any</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) there's on</button>";
    document.getElementById("control").innerHTML = "";
}
function q6() {
    imagem.innerHTML = "";
    pro++;
    controla++;
    enu.innerHTML = "6. tick the alternative that fills the space correctly:<br>A - ____ any ATMs around here?<br>B - Yes, there are _____ cash machines just across the street.";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) are there ; one a </button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) is there; some</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) aren't there; one</button>";
    td.innerHTML = "<button value='certo' id='btd' onclick='check(this.value)'>D) are there; some</button>";
    document.getElementById("control").innerHTML = "";
}
function q7() {
    pro++;
    controla++;
    imagem.innerHTML = "<img src='imagem_q07.jpg'>";
    enu.innerHTML = "7. look at the image and tick the alternative that fills the space correctly:";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) there's four cats</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) there're four cats</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) is there five cats</button>";
    td.innerHTML = "<button value='certo' id='btd' onclick='check(this.value)'>D) there're five cats</button>";
    document.getElementById("control").innerHTML = "";
}
function q8() {
    pro++;
    controla++;
    imagem.innerHTML = "";
    enu.innerHTML = "8. Choose the alternative that correctly completes the sentence:<br><br>A - ______ any good movies playing at the theater tonight?<br>B - Yes, there ______ a few great options to choose from.";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) Is there; is</button>";
    tb.innerHTML = "<button value='certo' id='btb' onclick='check(this.value)'>B) Are there; is</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) Is there; are</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) Are there; are</button>";
    document.getElementById("control").innerHTML = "";
}
function q9() {
    pro++;
    controla++;
    imagem.innerHTML = "<img src='imagem_q09.jpg'>";
    enu.innerHTML = "9. Choose the alternative that correctly completes the sentence: <br>A- the cat is ___";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) across the street</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) behind the street</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) the left the street</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) the right the street</button>";
    document.getElementById("control").innerHTML = "";
}
function q10() {
    pro++;
    controla++;
    imagem.innerHTML = "<img src='imagem_q10.jpg'>";
    enu.innerHTML = "10. Choose the alternative that correctly completes the sentence:<br>A- the women is___";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) in front of the painting</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) behind the painting</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) on top of the painting</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) on the right of the painting</button>";
    document.getElementById("control").innerHTML = "";
}
function q11() {
    pro++;
    controla++;
    imagem.innerHTML = "";
    enu.innerHTML = "11. imagine you're in the ocean hotel and Choose the alternative that correctly completes the sentence:<br><br>A - Are you lost?___ I help you? <br></br>B - Thanks. ___ you give me directions to Symphony Hall?";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) could; can</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) could; could</button>";
    tc.innerHTML = "<button value='certo' id='btc' onclick='check(this.value)'>C) can; could</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) can; can</button>";
    document.getElementById("control").innerHTML = "";
}
function q12() {
    pro++;
    controla++;
    imagem.innerHTML = "<audio controls><source src='q12.mp3' type='audio/mpeg'></audio>";
    enu.innerHTML = "12. Listen to the audio clip and choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ you please tell me when the next song starts?<br> B - Yes, _______________ I let you know as soon as it begins.";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) can; I will</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) can; I can</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) could; I will</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) could; I can</button>";
    document.getElementById("control").innerHTML = "";
}
function q13() {
    pro++;
    controla++;
    imagem.innerHTML = "<audio controls><source src='q13.mp3' type='audio/mpeg'></audio>";
    enu.innerHTML = "13. Listen to the audio clip and choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ order the special of the day?<br>B - Yes, _______________ it's the chef's recommendation.";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) can; I can</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) can; I could</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) could; I can</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) could; I could</button>";
    document.getElementById("control").innerHTML = "";
}
function q14() {
    pro++;
    controla++;
    imagem.innerHTML = "<audio controls><source src='q14.mp3' type='audio/mpeg'></audio>";
    enu.innerHTML = "14. Listen to the audio clip and choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ help me find the departure gate for flight 235?<br></br>B - Sure, _______________ it's gate C12";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) can; I will</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) could; I will</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) can; I can</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) could; I can</button>";
    document.getElementById("control").innerHTML = "";
}
function q15() {
    pro++;
    controla++;
    imagem.innerHTML = "<audio controls><source src='q15.mp3' type='audio/mpeg'></audio>";
    enu.innerHTML = "15. Listen to the audio clip and choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ try on this dress in a different size?<br>B - Of course, _______________ the fitting room right over there.";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) can; it's</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B)  can; there's</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) could; there's</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) could; it's</button>";
    document.getElementById("control").innerHTML = "";
}
function q16() {
    pro++;
    controla++;
    imagem.innerHTML = "";
    enu.innerHTML = "16. Choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ borrow your pen for a moment?<br>B - Of course, _______________.";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) can; it's</button>";
    tb.innerHTML = "<button value='certo' id='btb' onclick='check(this.value)'>B)  can; there's</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) could; there's</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) could; it's</button>";
    document.getElementById("control").innerHTML = "";
}
function q17() {
    pro++;
    controla++;
    imagem.innerHTML = "<audio controls><source src='q17.mp3' type='audio/mpeg'></audio>";
    enu.innerHTML = "17. Listen to the audio clip and choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ find the dairy section?<br>B - Sure, _______________.";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) could I; I will</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) can I; I will</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) could I; I can</button>";
    td.innerHTML = "<button value='certo' id='btd' onclick='check(this.value)'>D) can I; I can</button>";
    document.getElementById("control").innerHTML = "";
}
function q18() {
    pro++;
    controla++;
    imagem.innerHTML = "";
    enu.innerHTML = "18. Choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ borrow your pencil?<br>B - Sure, _______________.";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) can I; here you go</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) could I; here you go</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) can I; there you go</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) cacould I; there you go</button>";
    document.getElementById("control").innerHTML = "";
}
function q19() {
    pro++;
    controla++;
    enu.innerHTML = "19. Choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ use your phone for a moment?<br>B - Sorry, _______________.";
    ta.innerHTML = "<button value='certo' id='bta' onclick='check(this.value)'>A) can I; I'm using it</button>";
    tb.innerHTML = "<button value='errado' id='btb' onclick='check(this.value)'>B) could I; I'm using it</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) can I; it's available</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) could I; it's available</button>";
    document.getElementById("control").innerHTML = "";
}
function q20() {
    pro++;
    controla++;
    enu.innerHTML = "20. Choose the alternative that correctly completes the sentence:<br><br>A - Excuse me, _______________ have a glass of water?<br>B - Of course, _______________.";
    ta.innerHTML = "<button value='errado' id='bta' onclick='check(this.value)'>A) could I; here you go</button>";
    tb.innerHTML = "<button value='certo' id='btb' onclick='check(this.value)'>B) can I; here you go</button>";
    tc.innerHTML = "<button value='errado' id='btc' onclick='check(this.value)'>C) could I; there you go</button>";
    td.innerHTML = "<button value='errado' id='btd' onclick='check(this.value)'>D) can I; there you go</button>";
    document.getElementById("control").innerHTML = "";
}
function q21(){
    enu.innerHTML = "Você conseguiu terminar";
    document.getElementById("control").innerHTML = "<button onclick='reiniciar()'>Reinicia o Quiz</button>";
    ta.innerHTML = "";
    tb.innerHTML = "";
    tc.innerHTML = "";
    td.innerHTML = "";
}
function reiniciar(){
    location.reload();
}